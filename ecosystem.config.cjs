module.exports = {
    apps: [
        {
            name: 'wa-bot',
            exec_mode: 'cluster',
            instances: '8', // Sesuaikan dengan core atau bisa isi max untuk menggunakan semua core
            script: 'npm',
            args: 'start',
        },
    ],
}
