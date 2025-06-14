import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    console.log('API route called');
    console.log('RESEND_API_KEY exists:', !!process.env.RESEND_API_KEY);
    
    const formData = await request.json();
    console.log('Form data received:', formData);

    // Inicializar Resend
    const resend = new Resend(process.env.RESEND_API_KEY);

    // Criar o HTML do email
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
        <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
          <h1 style="color: #1e40af; margin-bottom: 30px; text-align: center;">Nova Solicitação de Demonstração</h1>
          
          <div style="margin-bottom: 30px;">
            <h2 style="color: #374151; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">Informações Pessoais</h2>
            <table style="width: 100%; margin-top: 15px;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 150px;">Nome:</td>
                <td style="padding: 8px 0; color: #6b7280;">${formData.firstName} ${formData.lastName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Email:</td>
                <td style="padding: 8px 0; color: #6b7280;">${formData.email}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Telefone:</td>
                <td style="padding: 8px 0; color: #6b7280;">${formData.phone}</td>
              </tr>
            </table>
          </div>

          <div style="margin-bottom: 30px;">
            <h2 style="color: #374151; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">Informações da Empresa</h2>
            <table style="width: 100%; margin-top: 15px;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 150px;">Empresa:</td>
                <td style="padding: 8px 0; color: #6b7280;">${formData.company}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Cargo:</td>
                <td style="padding: 8px 0; color: #6b7280;">${formData.jobTitle}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Setor:</td>
                <td style="padding: 8px 0; color: #6b7280;">${formData.industry}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Tamanho da Empresa:</td>
                <td style="padding: 8px 0; color: #6b7280;">${formData.companySize}</td>
              </tr>
            </table>
          </div>

          <div style="margin-bottom: 30px;">
            <h2 style="color: #374151; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">Preferências da Demonstração</h2>
            <table style="width: 100%; margin-top: 15px;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 150px;">Principal Desafio:</td>
                <td style="padding: 8px 0; color: #6b7280;">${formData.monthlyDocuments}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Prazo de Implementação:</td>
                <td style="padding: 8px 0; color: #6b7280;">${formData.timeline}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Tipo de Demo:</td>
                <td style="padding: 8px 0; color: #6b7280;">${formData.demoType}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Newsletter:</td>
                <td style="padding: 8px 0; color: #6b7280;">${formData.newsletter ? 'Sim' : 'Não'}</td>
              </tr>
            </table>
          </div>

          ${formData.currentChallenges ? `
          <div style="margin-bottom: 30px;">
            <h2 style="color: #374151; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">Desafios e Objetivos</h2>
            <div style="background-color: #f3f4f6; padding: 15px; border-radius: 5px; margin-top: 15px;">
              <p style="color: #374151; line-height: 1.6; margin: 0;">${formData.currentChallenges}</p>
            </div>
          </div>
          ` : ''}

          <div style="background-color: #dbeafe; padding: 20px; border-radius: 5px; text-align: center; margin-top: 30px;">
            <p style="color: #1e40af; font-weight: bold; margin: 0;">
              🚀 Nova solicitação de demonstração recebida!
            </p>
            <p style="color: #374151; margin: 10px 0 0 0; font-size: 14px;">
              Entre em contato com o cliente em até 24 horas para agendar a demonstração.
            </p>
          </div>
        </div>
      </div>
    `;

    // Enviar email
    const { data, error } = await resend.emails.send({
      from: 'ITCygnus Demo <onboarding@resend.dev>',
      to: ['samuel.rulli@itcygnus.com'],
      subject: `Nova Solicitação de Demo - ${formData.company} (${formData.firstName} ${formData.lastName})`,
      html: emailHtml,
    });

    if (error) {
      console.error('Erro ao enviar email:', error);
      return NextResponse.json(
        { error: 'Erro ao enviar email', details: error },
        { status: 500 }
      );
    }

    console.log('Email enviado com sucesso:', data);
    return NextResponse.json(
      { message: 'Email enviado com sucesso', data },
      { status: 200 }
    );

  } catch (error) {
    console.error('Erro na API:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor', details: error instanceof Error ? error.message : 'Erro desconhecido' },
      { status: 500 }
    );
  }
}
