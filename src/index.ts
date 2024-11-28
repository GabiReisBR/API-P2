import app from './app';
import sequelize from './database/config';
import Profile from './models/profile.model';
import Contract from './models/contract.model';
import Job from './models/job.model';

const PORT = 3000;

// Função para popular o banco de dados
const seedDatabase = async () => {
    console.log('Populando o banco de dados com dados iniciais...');

    // Criar Profiles
    const client = await Profile.create({
        firstName: 'John',
        lastName: 'Doe',
        profession: 'Developer',
        balance: 500,
        type: 'client',
    });

    const contractor = await Profile.create({
        firstName: 'Jane',
        lastName: 'Smith',
        profession: 'Designer',
        balance: 300,
        type: 'contractor',
    });

    // Acessar o atributo id explicitamente
    const contract1 = await Contract.create({
        terms: 'Website Design',
        clientId: client.getDataValue('id'), // Aqui está o ajuste
        contractorId: contractor.getDataValue('id'), // Aqui também
        status: 'in_progress',
    });

    // Criar Jobs
    await Job.create({
        contractId: contract1.getDataValue('id'), // Ajuste similar para contractId
        description: 'Homepage Design',
        price: 200,
        paid: false,
    });

    await Job.create({
        contractId: contract1.getDataValue('id'),
        description: 'Logo Design',
        price: 300,
        paid: true,
    });

    console.log('Dados fictícios criados no banco de dados!');
};

// Função principal para iniciar o servidor
const startServer = async () => {
    try {
        await sequelize.authenticate();
        console.log('Conexão com o banco de dados estabelecida com sucesso!');

        await sequelize.sync({ force: true });
        console.log('Banco de dados sincronizado.');

        await seedDatabase();

        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
        });
    } catch (error) {
        console.error('Erro ao iniciar o servidor:', error);
    }
};

startServer();
