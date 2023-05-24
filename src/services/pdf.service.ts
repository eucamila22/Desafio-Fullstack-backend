// import { any } from 'zod';
// import { AppDataSource } from '../data-source';
// import { Client } from '../entities/client.entity';
// import { iClientRepo } from '../interfaces/client.interface';
// import { Repository } from 'typeorm';

// const pdfService = async () => {
//     const PDFDocument = require('pdfkit');
// const fs = require('fs');

// // Função para gerar o relatório em PDF
// const generateReport = () => {
//     const clients:  Repository<Client> = AppDataSource.getRepository(Client)
//   // Criar um novo documento PDF
//   const doc = new PDFDocument();

//   // Configurar o nome do arquivo de saída
//   const filename = 'relatorio.pdf';

//   // Criar o conteúdo do relatório
//   doc.fontSize(18).text('Relatório de Clientes', { align: 'center' });
//   doc.moveDown();

//   // Percorrer os clientes e seus contatos
//   for (const client of clients) {
//     doc.fontSize(16).text(`Cliente: ${client.name}`);
//     doc.fontSize(12).text(`Email: ${client.email}`);
//     doc.fontSize(12).text(`Telefone: ${client.phone}`);
//     doc.moveDown();
    
//     doc.fontSize(14).text('Contatos:');
//     doc.moveDown();

//     // Percorrer os contatos do cliente
//     for (const contact of client.contacts) {
//       doc.fontSize(12).text(`Nome: ${contact.name}`);
//       doc.fontSize(12).text(`Email: ${contact.email}`);
//       doc.fontSize(12).text(`Telefone: ${contact.phone}`);
//       doc.moveDown();
//     }

//     doc.moveDown();
//   }

//   // Salvar o arquivo PDF
//   doc.pipe(fs.createWriteStream(filename));
//   doc.end();

//   console.log('Relatório gerado com sucesso!');
// };

// // Exemplo de uso
// const clients = [
//   {
//     name: 'João',
//     email: 'joao@email.com',
//     phone: '1234567890',
//     contacts: [
//       { name: 'Maria', email: 'maria@email.com', phone: '9876543210' },
//       { name: 'Pedro', email: 'pedro@email.com', phone: '5678901234' }
//     ]
//   },
//   // Outros clientes e contatos...
// ];

// generateReport(clients);


//     // const PDFKit = require('pdfkit');
//     // const fs = require('fs');
    
//     // const pdf = new PDFKit();
    
//     // pdf.text('Hello Rocketseat PDF');
    
//     // pdf.pipe(fs.createWriteStream('output.pdf'));
//     // pdf.end();
// }

// export default pdfService
