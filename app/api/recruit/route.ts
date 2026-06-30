import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// メールテンプレートのベーススタイル
const baseStyles = `
  font-family: 'Helvetica Neue', Arial, sans-serif;
  max-width: 600px;
  margin: 0 auto;
  background-color: #ffffff;
`;

const headerStyles = `
  background: linear-gradient(135deg, #1a3a2f 0%, #2d5a47 100%);
  padding: 40px 32px;
  text-align: center;
`;

const contentStyles = `
  padding: 40px 32px;
  background-color: #ffffff;
`;

const footerStyles = `
  background-color: #f8f9fa;
  padding: 24px 32px;
  text-align: center;
  border-top: 1px solid #e9ecef;
`;

const labelStyles = `
  color: #1a3a2f;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  width: 140px;
  min-width: 140px;
`;

const valueStyles = `
  color: #333333;
  font-size: 15px;
  line-height: 1.6;
  flex: 1;
`;

function row(label: string, valueHtml: string) {
  return `
      <table width="100%" cellpadding="0" cellspacing="0" style="border-bottom: 1px solid #f0f0f0;">
        <tr>
          <td style="padding: 20px 0; width: 140px; vertical-align: top;">
            <span style="${labelStyles}">${label}</span>
          </td>
          <td style="padding: 20px 0; vertical-align: top;">
            ${valueHtml}
          </td>
        </tr>
      </table>`;
}

interface EntryData {
  position: string;
  lastName: string;
  firstName: string;
  email: string;
  portfolioUrl: string;
  motivation: string;
}

// 会社向け通知メールテンプレート
function getAdminEmailHtml(data: EntryData) {
  const { position, lastName, firstName, email, portfolioUrl, motivation } = data;
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 20px; background-color: #f5f5f5;">
  <div style="${baseStyles}">
    <!-- Header -->
    <div style="${headerStyles}">
      <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 300; letter-spacing: 2px;">NEW ENTRY</h1>
      <p style="margin: 8px 0 0; color: rgba(255,255,255,0.8); font-size: 13px;">採用エントリーフォームからの応募</p>
    </div>

    <!-- Content -->
    <div style="${contentStyles}">
      ${row('Position', `<span style="${valueStyles}">${position || '未選択'}</span>`)}
      ${row('Name', `<span style="${valueStyles}">${lastName} ${firstName}</span>`)}
      ${row('Email', `<a href="mailto:${email}" style="color: #1a3a2f; text-decoration: none; font-size: 15px;">${email}</a>`)}
      ${row('Portfolio', portfolioUrl ? `<a href="${portfolioUrl}" style="color: #1a3a2f; font-size: 15px;">${portfolioUrl}</a>` : `<span style="${valueStyles}">未入力</span>`)}
      <table width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td style="padding: 20px 0; width: 140px; vertical-align: top;">
            <span style="${labelStyles}">Motivation</span>
          </td>
          <td style="padding: 20px 0; vertical-align: top;">
            <p style="margin: 0; color: #333333; font-size: 15px; line-height: 1.8; white-space: pre-wrap;">${motivation || '未入力'}</p>
          </td>
        </tr>
      </table>
    </div>

    <!-- Footer -->
    <div style="${footerStyles}">
      <p style="margin: 0; color: #999999; font-size: 12px;">このメールは evantia-co.jp の採用エントリーフォームから自動送信されました</p>
    </div>
  </div>
</body>
</html>`;
}

// 応募者向け自動返信メールテンプレート
function getApplicantEmailHtml(data: EntryData) {
  const { position, lastName, firstName, email, portfolioUrl, motivation } = data;
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 20px; background-color: #f5f5f5;">
  <div style="${baseStyles}">
    <!-- Header -->
    <div style="${headerStyles}">
      <h1 style="margin: 0; color: #ffffff; font-size: 22px; font-weight: 300; letter-spacing: 2px;">EVANTIA</h1>
      <p style="margin: 8px 0 0; color: rgba(255,255,255,0.8); font-size: 13px;">ご応募ありがとうございます</p>
    </div>

    <!-- Content -->
    <div style="${contentStyles}">
      <p style="margin: 0 0 24px; color: #333333; font-size: 15px; line-height: 1.8;">
        ${lastName} ${firstName} 様<br><br>
        この度は株式会社エバンティアの採用にご応募いただき、誠にありがとうございます。<br>
        以下の内容で承りました。担当者より追ってご連絡いたします。
      </p>

      <div style="background-color: #f8f9fa; padding: 24px; margin: 24px 0;">
        ${row('Position', `<span style="${valueStyles}">${position || '未選択'}</span>`)}
        ${row('Name', `<span style="${valueStyles}">${lastName} ${firstName}</span>`)}
        ${row('Email', `<span style="${valueStyles}">${email}</span>`)}
        ${portfolioUrl ? row('Portfolio', `<a href="${portfolioUrl}" style="color: #1a3a2f; font-size: 15px;">${portfolioUrl}</a>`) : ''}
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td style="padding: 16px 0; width: 120px; vertical-align: top;">
              <span style="${labelStyles}">Motivation</span>
            </td>
            <td style="padding: 16px 0; vertical-align: top;">
              <p style="margin: 0; color: #333333; font-size: 14px; line-height: 1.8; white-space: pre-wrap;">${motivation || '未入力'}</p>
            </td>
          </tr>
        </table>
      </div>

      <p style="margin: 24px 0 0; color: #666666; font-size: 14px; line-height: 1.8;">
        ご不明な点がございましたら、お気軽にお問い合わせください。<br>
        今後ともよろしくお願いいたします。
      </p>
    </div>

    <!-- Footer -->
    <div style="${footerStyles}">
      <p style="margin: 0 0 8px; color: #1a3a2f; font-size: 14px; font-weight: 600;">株式会社エバンティア</p>
      <p style="margin: 0; color: #999999; font-size: 12px; line-height: 1.8;">
        〒541-0047 大阪府大阪市中央区淡路町1-4-9 TPR北浜ビル 601<br>
        <a href="mailto:info@evantia-co.jp" style="color: #999999;">info@evantia-co.jp</a>
      </p>
    </div>
  </div>
</body>
</html>`;
}

export async function POST(request: Request) {
  // APIキーの存在チェック
  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY is not configured');
    return NextResponse.json(
      { error: 'メール送信サービスが設定されていません' },
      { status: 500 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const body = await request.json();
    const data: EntryData = {
      position: body.position || '',
      lastName: body.lastName || '',
      firstName: body.firstName || '',
      email: body.email || '',
      portfolioUrl: body.portfolioUrl || '',
      motivation: body.motivation || '',
    };

    // バリデーション
    if (!data.email || !data.lastName || !data.firstName) {
      return NextResponse.json(
        { error: 'お名前とメールアドレスは必須です' },
        { status: 400 }
      );
    }

    const fromAddress = process.env.FROM_EMAIL || 'エバンティア採用 <onboarding@resend.dev>';
    const toAddress = process.env.CONTACT_EMAIL || 'info@evantia-co.jp';

    // 会社側への通知メール
    const adminEmailPromise = resend.emails.send({
      from: fromAddress,
      to: toAddress,
      replyTo: data.email,
      subject: `【採用エントリー】${data.lastName} ${data.firstName}様（${data.position || '職種未選択'}）`,
      html: getAdminEmailHtml(data),
    });

    // 応募者への自動返信メール
    const applicantEmailPromise = resend.emails.send({
      from: fromAddress,
      to: data.email,
      subject: '【エバンティア】採用エントリーを受け付けました',
      html: getApplicantEmailHtml(data),
    });

    // 両方のメールを並行送信
    const [adminResult, applicantResult] = await Promise.all([
      adminEmailPromise,
      applicantEmailPromise,
    ]);

    if (adminResult.error || applicantResult.error) {
      const resendError = adminResult.error || applicantResult.error;
      console.error('Resend error:', JSON.stringify(resendError, null, 2));
      return NextResponse.json(
        { error: `メール送信に失敗しました: ${resendError?.message || '不明なエラー'}` },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      adminId: adminResult.data?.id,
      applicantId: applicantResult.data?.id,
    });
  } catch (error) {
    console.error('Recruit API error:', error);
    return NextResponse.json(
      { error: 'サーバーエラーが発生しました' },
      { status: 500 }
    );
  }
}
