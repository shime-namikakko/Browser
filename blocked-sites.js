// 開けない主要なサイト一覧
// このファイルを編集することで、リストを簡単に更新できます

const BLOCKED_SITES = [
    {
        name: 'Google系サービス',
        sites: [
            'Gmail (mail.google.com)',
            'Google検索 (google.com)',
            'YouTube (youtube.com)',
            'Google Drive (drive.google.com)',
            'Google Maps (maps.google.com)',
            'Google Calendar (calendar.google.com)'
        ]
    },
    {
        name: 'SNS',
        sites: [
            'Twitter/X (twitter.com, x.com)',
            'Facebook (facebook.com)',
            'Instagram (instagram.com)',
            'LinkedIn (linkedin.com)',
            'TikTok (tiktok.com)'
        ]
    },
    {
        name: 'その他の主要サービス',
        sites: [
            'GitHub (github.com)',
            'Netflix (netflix.com)',
            'Amazon (amazon.com)',
            'PayPal (paypal.com)',
            'Apple ID (appleid.apple.com)'
        ]
    },
    {
        name: '使えるサイトの例',
        sites: [
            'Wikipedia (wikipedia.org)',
            'Archive.org (archive.org)',
            'Example.com (example.com)',
            'MDN Web Docs (developer.mozilla.org)'
        ]
    }
];
