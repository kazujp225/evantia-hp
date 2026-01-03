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

const rowStyles = `
  display: flex;
  border-bottom: 1px solid #f0f0f0;
  padding: 16px 0;
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

// 会社向け通知メールテンプレート
function getAdminEmailHtml(company: string, email: string, content: string) {
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
      <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 300; letter-spacing: 2px;">NEW INQUIRY</h1>
      <p style="margin: 8px 0 0; color: rgba(255,255,255,0.8); font-size: 13px;">ウェブサイトからのお問い合わせ</p>
    </div>

    <!-- Content -->
    <div style="${contentStyles}">
      <!-- Company Row -->
      <table width="100%" cellpadding="0" cellspacing="0" style="border-bottom: 1px solid #f0f0f0;">
        <tr>
          <td style="padding: 20px 0; width: 140px; vertical-align: top;">
            <span style="${labelStyles}">Company</span>
          </td>
          <td style="padding: 20px 0; vertical-align: top;">
            <span style="${valueStyles}">${company || '未入力'}</span>
          </td>
        </tr>
      </table>

      <!-- Email Row -->
      <table width="100%" cellpadding="0" cellspacing="0" style="border-bottom: 1px solid #f0f0f0;">
        <tr>
          <td style="padding: 20px 0; width: 140px; vertical-align: top;">
            <span style="${labelStyles}">Email</span>
          </td>
          <td style="padding: 20px 0; vertical-align: top;">
            <a href="mailto:${email}" style="color: #1a3a2f; text-decoration: none; font-size: 15px;">${email}</a>
          </td>
        </tr>
      </table>

      <!-- Message Row -->
      <table width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td style="padding: 20px 0; width: 140px; vertical-align: top;">
            <span style="${labelStyles}">Message</span>
          </td>
          <td style="padding: 20px 0; vertical-align: top;">
            <p style="margin: 0; color: #333333; font-size: 15px; line-height: 1.8; white-space: pre-wrap;">${content}</p>
          </td>
        </tr>
      </table>
    </div>

    <!-- Footer -->
    <div style="${footerStyles}">
      <p style="margin: 0; color: #999999; font-size: 12px;">このメールは evantia-co.jp のお問い合わせフォームから自動送信されました</p>
    </div>
  </div>
</body>
</html>`;
}

// お客様向け自動返信メールテンプレート
function getCustomerEmailHtml(company: string, email: string, content: string) {
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
      <p style="margin: 8px 0 0; color: rgba(255,255,255,0.8); font-size: 13px;">お問い合わせありがとうございます</p>
    </div>

    <!-- Content -->
    <div style="${contentStyles}">
      <p style="margin: 0 0 24px; color: #333333; font-size: 15px; line-height: 1.8;">
        ${company ? company + ' ' : ''}ご担当者様<br><br>
        この度はお問い合わせいただき、誠にありがとうございます。<br>
        以下の内容で承りました。担当者より2営業日以内にご連絡いたします。
      </p>

      <div style="background-color: #f8f9fa; padding: 24px; margin: 24px 0;">
        <!-- Company Row -->
        <table width="100%" cellpadding="0" cellspacing="0" style="border-bottom: 1px solid #e9ecef;">
          <tr>
            <td style="padding: 16px 0; width: 120px; vertical-align: top;">
              <span style="${labelStyles}">Company</span>
            </td>
            <td style="padding: 16px 0; vertical-align: top;">
              <span style="${valueStyles}">${company || '未入力'}</span>
            </td>
          </tr>
        </table>

        <!-- Email Row -->
        <table width="100%" cellpadding="0" cellspacing="0" style="border-bottom: 1px solid #e9ecef;">
          <tr>
            <td style="padding: 16px 0; width: 120px; vertical-align: top;">
              <span style="${labelStyles}">Email</span>
            </td>
            <td style="padding: 16px 0; vertical-align: top;">
              <span style="${valueStyles}">${email}</span>
            </td>
          </tr>
        </table>

        <!-- Message Row -->
        <table width="100%" cellpadding="0" cellspacing="0">
          <tr>
            <td style="padding: 16px 0; width: 120px; vertical-align: top;">
              <span style="${labelStyles}">Message</span>
            </td>
            <td style="padding: 16px 0; vertical-align: top;">
              <p style="margin: 0; color: #333333; font-size: 14px; line-height: 1.8; white-space: pre-wrap;">${content}</p>
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
        〒541-0047 大阪府大阪市中央区淡路町1-4-9 TPR北浜ビル 6F<br>
        <a href="mailto:info@evantia-co.jp" style="color: #999999;">info@evantia-co.jp</a>
      </p>
    </div>
  </div>
</body>
</html>`;
}

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { company, email, content } = await request.json();

    // バリデーション
    if (!email || !content) {
      return NextResponse.json(
        { error: 'メールアドレスとお問い合わせ内容は必須です' },
        { status: 400 }
      );
    }

    const fromAddress = process.env.FROM_EMAIL || 'お問い合わせ <onboarding@resend.dev>';
    const toAddress = process.env.CONTACT_EMAIL || 'info@evantia-co.jp';

    // 会社側への通知メール
    const adminEmailPromise = resend.emails.send({
      from: fromAddress,
      to: toAddress,
      replyTo: email,
      subject: `【お問い合わせ】${company || '会社名未入力'}様より`,
      html: getAdminEmailHtml(company, email, content),
    });

    // お客様への自動返信メール
    const customerEmailPromise = resend.emails.send({
      from: fromAddress,
      to: email,
      subject: '【エバンティア】お問い合わせを受け付けました',
      html: getCustomerEmailHtml(company, email, content),
    });

    // 両方のメールを並行送信
    const [adminResult, customerResult] = await Promise.all([
      adminEmailPromise,
      customerEmailPromise,
    ]);

    if (adminResult.error || customerResult.error) {
      console.error('Resend error:', adminResult.error || customerResult.error);
      return NextResponse.json(
        { error: 'メール送信に失敗しました' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      adminId: adminResult.data?.id,
      customerId: customerResult.data?.id,
    });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'サーバーエラーが発生しました' },
      { status: 500 }
    );
  }
}
