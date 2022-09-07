const apps = [
    {
        name: 'bot-wa',
        exec_mode: 'cluster',
        instances: '8', // Sesuaikan dengan core atau bisa isi max untuk menggunakan semua core
        script: 'npm',
        args: 'start',
    },
]

export { apps }
