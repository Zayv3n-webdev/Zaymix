// DOM Elements
const homePage = document.getElementById('homePage');
const songDetailPage = document.getElementById('songDetailPage');
const playerPage = document.getElementById('playerPage');

const backToHomeFromDetailBtn = document.getElementById('backToHomeFromDetailBtn');
const backToHomeBtn = document.getElementById('backToHomeBtn'); // Back button from player to home
const bodyElement = document.body;

const backgroundVideoContainer = document.querySelector('.video-background-container');
const backgroundVideo = document.getElementById('backgroundVideo');

// Elements for the Song Detail Page (will not be used immediately when clicking on a song, but will still be loaded)
const detailAlbumArt = document.getElementById('detailAlbumArt');
const detailTrackTitle = document.getElementById('detailTrackTitle');
const detailTrackArtist = document.getElementById('detailTrackArtist');
const detailAlbumName = document.getElementById('detailAlbumName');
const playFromDetailBtn = document.getElementById('playFromDetailBtn'); // Play button on detail page

const audioPlayer = document.getElementById('audioPlayer');
const albumArtPlayer = document.getElementById('albumArt');
const playerTrackTitle = document.getElementById('playerTrackTitle');
const playerTrackArtist = document.getElementById('playerTrackArtist');
const lyricsContainer = document.getElementById('lyricsContainer');

const playerProgressBarContainer = document.getElementById('playerProgressBarContainer');
const playerProgressBar = document.getElementById('playerProgressBar');
const playerCurrentTime = document.getElementById('playerCurrentTime');
const playerTotalDuration = document.getElementById('playerTotalDuration');

const playerPrevBtn = document.getElementById('playerPrevBtn');
const playerPlayPauseBtn = document.getElementById('playerPlayPauseBtn');
const playerNextBtn = document.getElementById('playerNextBtn');
const playerRepeatBtn = document.getElementById('playerRepeatBtn');
const playerShuffleBtn = document.getElementById('playerShuffleBtn');
const playerVolumeSlider = document.getElementById('playerVolumeSlider');
const playerSpeedSlider = document.getElementById('playerSpeedSlider'); // Add this
const currentSpeedDisplay = document.getElementById('currentSpeedDisplay'); // Add this

// App State
let songs = [
    {
        id: 1,
        title: "Beranjak Dewasa",
        artist: "Nadin Amizah",
        album: "Nadin Amizah",
        albumArtUrl: "https://i.scdn.co/image/ab67616d00001e026d57a5c60decaa8fb39d5afb",
        audioSrc: "audio/Beranjak Dewasa.mp3",
        videoBgSrc: "videos/Fallen - Lola Amour.mp4", // Path video background specifically for this song
        // Lyrics with timestamp in seconds
        lyrics: [
            { time: 0, text: "Pada Akhirnya" },
            { time: 4, text: "ini semua" },
            { time: 8.5, text: "Hanyalah permulaan" },
            { time: 17, text: "Pada akhirnya kami semua" },
            { time: 25.5, text: "Berkawan dengan sebentar" },
            { time: 34, text: "Berbaring tersentak tertawa" },
            { time: 42, text: "Tertawa dengan air mata" },
            { time: 51, text: "Mengingat bodohnya dunia" },
            { time: 59, text: "Dan kita yang masih saja" },
            { time: 66, text: "Berusaha" },
            { time: 75.6, text: "Kita beranjak dewasa" },
            { time: 80, text: "Jauh terburu seharusnya" },
            { time: 84, text: "Bagai bintang yang jatuh" },
            { time: 88, text: "Jauh terburu waktu" },
            { time: 92.5, text: "Mati lebih cepat" },
            { time: 96.5, text: "Mati lebih cepat" },
            { time: 101, text: "Kita beranjak dewasa" },
            { time: 105, text: "Jauh terburu seharusnya" },
            { time: 109.3, text: "Bagai bintang yang jatuh" },
            { time: 113.4, text: "Jauh terburu waktu" },
            { time: 117.3, text: "Mati lebih cepat" },
            { time: 121.8, text: "Mati lebih cepat" },
            { time: 133.6, text: "Pada akhirnya" },
            { time: 137.8, text: "Tirai tertutup" },
            { time: 142.7, text: "Pemeran harus menunduk" },
            { time: 150, text: "Pada akhirnya" },
            { time: 154.6, text: "Aku berdoa" },
            { time: 159.4, text: "Namaku akan kau bawa" },
            { time: 167.5, text: "Berbaring tersentak tertawa" },
            { time: 175.7, text: "Tertawa dengan air mata" },
            { time: 184.2, text: "Mengingat bodohnya dunia" },
            { time: 192.2, text: "Dan kita yang masih saja" },
            { time: 199.2, text: "Berusaha" },
            { time: 205.2, text: "Kita beranjak dewasa" },
            { time: 209.2, text: "Jauh terburu seharusnya" },
            { time: 213.3, text: "Bagai bintang yang jatuh" },
            { time: 217.3, text: "Jauh terburu waktu" },
            { time: 221.5, text: "Mati lebih cepat" },
            { time: 226.2, text: "Mati lebih cepat" },
            { time: 230.3, text: "Kita beranjak dewasa" },
            { time: 234.2, text: "Jauh terburu seharusnya" },
            { time: 238.3, text: "Bagai bintang yang jatuh" },
            { time: 242.3, text: "Jauh terburu waktu" },
            { time: 247, text: "Mati lebih cepat" },
            { time: 251.2, text: "Mati lebih cepat" },
            { time: 255.2, text: "Kita beranjak dewasa" },
            { time: 259.3, text: "Jauh terburu seharusnya" },
            { time: 265.8, text: "Oh, oh-oh-oh-oh, oh" },
            { time: 272.3, text: "Oh, oh" },
            { time: 276.6, text: "Oh, oh" },
            { time: 280, text: "Pada akhirnya ini semua" },
            { time: 289, text: "Hanyalah permulaan" },
        ]
    },
    {
        id: 2,
        title: "Perfect",
        artist: "One Direction",
        album: "Made in the A.M.",
        albumArtUrl: "https://i.scdn.co/image/ab67616d0000b273241e4fe75732c9c4b49b94c3",
        audioSrc: "audio/Perfect - One Direction.mp3",
        videoBgSrc: "videos/Perfect - One Direction.mp4", // Path video background specifically for this song
        // Lyrics with timestamp in seconds
        lyrics: [
            { time: 5.7, text: "I might never be your knight in shining armor" },
            { time: 10.2, text: "I might never be the one you take home to mother" },
            { time: 15.2, text: "And I might never be the one who brings you flowers" },
            { time: 20, text: "But I can be the one, be the one tonight" },
            { time: 25.4, text: "When I first saw you" },
            { time: 122, text: "From across the room" },
            { time: 129, text: "I could tell that you were curious (oh, yeah)" },
            { time: 135, text: "Girl, I hope you’re sure" },
            { time: 142, text: "What you're looking for" },
            { time: 149, text: "Cause I'm not good at making promises" },
            { time: 156, text: "But if you like causing trouble up in hotel rooms" },
            { time: 163, text: "And if you like having secret little rendezvous" },
            { time: 170, text: "If you like to do the things you know that we shouldn’t do" },
            { time: 177, text: "Then baby, I'm perfect" },
            { time: 184, text: "Baby, I'm perfect for you" },
            { time: 191, text: "And if you like midnight driving with the windows down" },
            { time: 198, text: "And if you like going places we can’t even pronounce" },
            { time: 205, text: "If you like to do whatever you've been dreaming about" },
            { time: 212, text: "Baby, you're perfect" },
            { time: 219, text: "Baby, you're perfect" },
            { time: 226, text: "So let's start right now" },
            { time: 233, text: "I might never be the hands you put your heart in" },
            { time: 240, text: "Or the arms that hold you any time you want them" },
            { time: 247, text: "But that don’t mean that we can’t live here in the moment" },
            { time: 254, text: "Cause I can be the one you love from time to time" },
            { time: 261, text: "When I first saw you" },
            { time: 268, text: "From across the room" },
            { time: 275, text: "I could tell that you were curious (oh, yeah)" },
            { time: 282, text: "Girl, I hope you’re sure" },
            { time: 289, text: "What you're looking for" },
            { time: 296, text: "Cause I'm not good at making promises" },
            { time: 303, text: "But if you like causing trouble up in hotel rooms" },
            { time: 310, text: "And if you like having secret little rendezvous" },
            { time: 317, text: "If you like to do the things you know that we shouldn’t do" },
            { time: 324, text: "Baby, I'm perfect" },
            { time: 331, text: "Baby, I'm perfect for you" },
            { time: 338, text: "And if you like midnight driving with the windows down" },
            { time: 345, text: "And if you like going places we can’t even pronounce" },
            { time: 352, text: "If you like to do whatever you've been dreaming about" },
            { time: 359, text: "Baby, you're perfect" },
            { time: 366, text: "Baby, you're perfect" },
            { time: 373, text: "So let's start right now" },
            { time: 380, text: "And if you like cameras flashing every time we go out" },
            { time: 387, text: "(Oh, yeah)" },
            { time: 394, text: "And if you're looking for someone to write your breakup songs about" },
            { time: 401, text: "Baby, I'm perfect" },
            { time: 408, text: "Baby, we're perfect" },
            { time: 415, text: "If you like causing trouble up in hotel rooms" },
            { time: 422, text: "And if you like having secret little rendezvous" },
            { time: 429, text: "If you like to do the things you know that we shouldn’t do" },
            { time: 436, text: "Baby, I'm perfect" },
            { time: 443, text: "Baby, I'm perfect for you" },
            { time: 450, text: "And if you like midnight driving with the windows down" },
            { time: 457, text: "And if you like going places we can’t even pronounce" },
            { time: 464, text: "If you like to do whatever you've been dreaming about" },
            { time: 471, text: "Baby, you're perfect" },
            { time: 478, text: "Baby, you're perfect" },
            { time: 88, text: "I might never be your knight in shining armor" },
            { time: 95, text: "I might never be the one you take home to mother" },
            { time: 102, text: "And I might never be the one who brings you flowers" },
            { time: 109, text: "But I can be the one, be the one tonight" },
            { time: 116, text: "When I first saw you" },
            { time: 122, text: "From across the room" },
            { time: 129, text: "I could tell that you were curious (oh, yeah)" },
            { time: 135, text: "Girl, I hope you’re sure" },
            { time: 142, text: "What you're looking for" },
            { time: 149, text: "Cause I'm not good at making promises" },
            { time: 156, text: "But if you like causing trouble up in hotel rooms" },
            { time: 163, text: "And if you like having secret little rendezvous" },
            { time: 170, text: "If you like to do the things you know that we shouldn’t do" },
            { time: 177, text: "Then baby, I'm perfect" },
            { time: 184, text: "Baby, I'm perfect for you" },
            { time: 191, text: "And if you like midnight driving with the windows down" },
            { time: 198, text: "And if you like going places we can’t even pronounce" },
            { time: 205, text: "If you like to do whatever you've been dreaming about" },
            { time: 212, text: "Baby, you're perfect" },
            { time: 219, text: "Baby, you're perfect" },
            { time: 226, text: "So let's start right now" },
            { time: 233, text: "I might never be the hands you put your heart in" },
            { time: 240, text: "Or the arms that hold you any time you want them" },
            { time: 247, text: "But that don’t mean that we can’t live here in the moment" },
            { time: 254, text: "Cause I can be the one you love from time to time" },
            { time: 261, text: "When I first saw you" },
            { time: 268, text: "From across the room" },
            { time: 275, text: "I could tell that you were curious (oh, yeah)" },
            { time: 282, text: "Girl, I hope you’re sure" },
            { time: 289, text: "What you're looking for" },
            { time: 296, text: "Cause I'm not good at making promises" },
            { time: 303, text: "But if you like causing trouble up in hotel rooms" },
            { time: 310, text: "And if you like having secret little rendezvous" },
            { time: 317, text: "If you like to do the things you know that we shouldn’t do" },
            { time: 324, text: "Baby, I'm perfect" },
            { time: 331, text: "Baby, I'm perfect for you" },
            { time: 338, text: "And if you like midnight driving with the windows down" },
            { time: 345, text: "And if you like going places we can’t even pronounce" },
            { time: 352, text: "If you like to do whatever you've been dreaming about" },
            { time: 359, text: "Baby, you're perfect" },
            { time: 366, text: "Baby, you're perfect" },
            { time: 373, text: "So let's start right now" },
            { time: 380, text: "And if you like cameras flashing every time we go out" },
            { time: 387, text: "(Oh, yeah)" },
            { time: 394, text: "And if you're looking for someone to write your breakup songs about" },
            { time: 401, text: "Baby, I'm perfect" },
            { time: 408, text: "Baby, we're perfect" },
            { time: 415, text: "If you like causing trouble up in hotel rooms" },
            { time: 422, text: "And if you like having secret little rendezvous" },
            { time: 429, text: "If you like to do the things you know that we shouldn’t do" },
            { time: 436, text: "Baby, I'm perfect" },
            { time: 443, text: "Baby, I'm perfect for you" },
            { time: 450, text: "And if you like midnight driving with the windows down" },
            { time: 457, text: "And if you like going places we can’t even pronounce" },
            { time: 464, text: "If you like to do whatever you've been dreaming about" },
            { time: 471, text: "Baby, you're perfect" },
            { time: 478, text: "Baby, you're perfect" },
            { time: 485, text: "So let's start right now" }
        ]
    },    
    {
        id: 3,
        title: "CandyRella",
        artist: "Paul Partohap",
        album: "Paul Partohap",
        albumArtUrl: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e025c572ec4b04e77c5cfa9d868",
        audioSrc: "audio/candyrella.mp3",
        videoBgSrc: "videos/Heat Waves - Glass Animals.mp4", // Path video background specifically for this song
        // Lyrics with timestamp in seconds
        lyrics: [
            { time: 0, text: "You're the prettiest girl in the world" },
            { time: 4.3, text: "(Yes, you are)" },
            { time: 5, text: "You're the sweetest soul I could wish for" },
            { time: 10, text: "Want your love in every flavor" },
            { time: 15, text: "You're the sweetest" },
            { time: 18, text: "You're the sweetest" },
            { time: 41.5, text: "I've dreams about you" },
            { time: 46, text: "Three different times last night" },
            { time: 48.2, text: "You are a wish my heart desires" },
            { time: 51.3, text: "Can't get you out of my mind" },
            { time: 56, text: "You make my days so sweet" },
            { time: 58, text: "You in it, I'm complete" },
            { time: 61, text: "May I take your hand?" },
            { time: 65.5, text: "Did you save the last dance for me?" },
            { time: 69.3, text: "Oh, I pray" },
            { time: 72, text: "The happiest ending is written for you and me" },
            { time: 82, text: "I've dreams about you" },
            { time: 86.2, text: "Holding your hand so tight (holding your hand tight)" },
            { time: 88.8, text: "As our hair growing white" },
            { time: 92, text: "Might not be good at much, but" },
            { time: 96.3, text: "Believe me when I say (believe me when I say)" },
            { time: 98.8, text: "'Til the end I'll stay" },
            { time: 101.3, text: "May I take your hand?" },
            { time: 106, text: "Did you save the last dance for me?" },
            { time: 110, text: "Oh, I pray" },
            { time: 113, text: "The happiest ending" },
            { time: 116.8, text: "Is written for you and me" },
            { time: 121.2, text: "You're the prettiest girl in the world" },
            { time: 125.3, text: "(Yes, you are)" },
            { time: 126.2, text: "You're the sweetest soul I could wish for" },
            { time: 131.2, text: "Want your love in every flavor" },
            { time: 136.3, text: "You're the sweetest" },
            { time: 138.2, text: "You're the sweetest" },
            { time: 141.3, text: "You're the prettiest girl in the world" },
            { time: 144.5, text: "(Well, I told you before, right? Yes, you are)" },
            { time: 146.2,text: "You're the sweetest soul I could wish for (sweetest soul - for)" },
            { time: 151.3, text: "Want your love in every flavor" },
            { time: 156.3, text: "You're the sweetest" },
            { time: 158.8, text: "You're the sweetest" },
            { time: 164, text: "In the world" },
            { time: 167.4, text: "Sweetest soul - for" },
            { time: 172.2, text: "Love in every flavor" },
            { time: 176.7, text: "You're the sweetest" }
        ]
    },
    {
        id: 4,
        title: "Daylight",
        artist: "Taylor Swift",
        album: "Taylor Swift",
        albumArtUrl: "https://i.scdn.co/image/ab67616d0000b273e787cffec20aa2a396a61647",
        audioSrc: "audio/daylight.mp3",
        videoBgSrc: "videos/Rewrite The Stars - James Arthur & Anne-Marie.mp4",
        lyrics: [
             { time: 0, text: "My love was as cruel as the cities I lived in" },
            { time: 7.2, text: "(Everyone looked worse in the light)" },
            { time: 12.5, text: "There are so many lines that I've crossed, unforgiven" },
            { time: 20, text: "I'll tell you truth, but never, \"Goodbye\"" },
            { time: 26.3, text: "I don't wanna look at anything else now that I saw you" },
            { time: 33, text: "I don't wanna think of anything else now that I thought of you" },
            { time: 39.5, text: "I've been sleepin' so long in a twenty-year dark night" },
            { time: 44.6, text: "And now I see daylight, I only see daylight" },
            { time: 51.2, text: "Luck of the draw only draws the unlucky" },
            { time: 58.3, text: "And so I became the butt of the joke" },
            { time: 64, text: "I wounded the good and I trusted the wicked" },
            { time: 71.3, text: "Clearin' the air, I breathed in the smoke" },
            { time: 78, text: "Maybe you ran with the wolves and refused to settle down" },
            { time: 81, text: "Maybe I've stormed out of every single room in this town" },
            { time: 84, text: "Threw out our cloaks and our daggers because it's morning now" },
            { time: 88, text: "It's brighter now, now" },
            { time: 90.9, text: "I don't wanna look at anything else now that I saw you" },
            { time: 97.2, text: "I don't wanna think of anything else now that I thought of you" },
            { time: 103.5, text: "I've been sleepin' so long in a twenty-year dark night" },
            { time: 108.8, text: "And now I see daylight (daylight), I only see daylight" },
            { time: 115.5, text: "I only see daylight, daylight, daylight, daylight" },
            { time: 129.8, text: "And I can still see it all (in my mind)" },
            { time: 133.0, text: "All of you, all of me (intertwined)" },
            { time: 136.0, text: "I once believed love would be (black and white)" },
            { time: 140.0, text: "But it's golden (golden)" },
            { time: 142.5, text: "And I can still see it all (in my head)" },
            { time: 146.0, text: "Back and forth from New York (sneakin' in your bed)" },
            { time: 149.0, text: "I once believed love would be (burnin' red)" },
            { time: 152.8, text: "But it's golden... Like daylight" },
            { time: 167.2, text: "I don't wanna look at anything else now that I saw you" },
            { time: 174, text: "I don't wanna think of anything else now that I thought of you" },
            { time: 180.5, text: "I've been sleepin' so long in a twenty-year dark night" },
            { time: 186, text: "And now I see daylight (I see daylight), I only see daylight (oh)" },
            { time: 192, text: "I only see daylight, daylight, daylight, daylight" },
            { time: 220.8, text: "Like daylight, It's golden, Like daylight" },
            { time: 231.3, text: "You gotta step into the daylight and let it go" },
            { time: 237, text: "Just let it go... Let it go" },
           
        ]
    },

    {
        id: 5,
        title: "Ripples",
        artist: "Beabadoobee",
        album: "Beabadoobee",
        albumArtUrl: "https://i.scdn.co/image/ab67616d0000b273384d10f967c2b914de7e2713",
        audioSrc: "audio/ripples.mp3",
        videoBgSrc: "videos/Rewrite The Stars - James Arthur & Anne-Marie.mp4",
        lyrics: [
            { time: 38.2, text: "Please don't make me hide" },
            { time: 41.0, text: "I've been putting up a fight" },
            { time: 43.3, text: "What's the use of it now" },
            { time: 47.0, text: "When I get pulled down anyways?" },
            { time: 50.3, text: "I've been hiding my expression" },
            { time: 53.5, text: "You can't blame the reflections" },
            { time: 56.2, text: "And the ripples on the ground" },
            { time: 59.8, text: "I might as well have drowned" },
            { time: 66.0, text: "So, I'm keeping busy" },
            { time: 69.0, text: "Work twice as hard as you" },
            { time: 73.0, text: "Want you to believe me" },
            { time: 76.0, text: "That I can pick and choose" },
            { time: 79.0, text: "Said you'd let me drive your car" },
            { time: 82.5, text: "As long as I'm with you" },
            { time: 85.5, text: "Then you'd wait 'til we get far" },
            { time: 88.8, text: "To tell me that you'll be gone soon" },
            { time: 100.0, text: "Feels too late right now" },
            { time: 102.3, text: "I've been holding back" },
            { time: 104.3, text: "'Cause I'm afraid that I'm too loud" },
            { time: 108.7, text: "Six feet underground" },
            { time: 110.8, text: "That I feel alone again" },
            { time: 115.2, text: "Stuck between my friends" },
            { time: 117.0, text: "I guess I'll figure my way through them" },
            { time: 121.3, text: "Not sure how I do it" },
            { time: 124.0, text: "But I'm sure now" },
            { time: 128.0, text: "The people would listen as the water glistens" },
            { time: 134.0, text: "Then I see my reflection so much clear" },
            { time: 140.6, text: "So, I'm keeping busy" },
            { time: 143.5, text: "Work twice as hard as you" },
            { time: 147.0, text: "Want you to believe me" },
            { time: 150.0, text: "That I can pick and choose" },
            { time: 153.3, text: "Said you'd let me drive your car" },
            { time: 156.7, text: "As long as I'm with you" },
            { time: 160.0, text: "Then you'd wait 'til we get far" },
            { time: 163.0, text: "To tell me that you'll be gone soon" }
           
        ]
    },

    {
        id: 6,
        title: "Monokrom",
        artist: "Tulus", 
        album: "Tulus",
        albumArtUrl: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e0271c65edbeed32af70b900637", 
        audioSrc: "audio/monokrom.mp3",
        videoBgSrc: "videos/The Day You Said Goodnight - Hale.mp4",
        lyrics: [
            { time: 22.2, text: "Lembaran foto hitam-putih" },
            { time: 27.2, text: "Aku coba ingat lagi warna bajumu kala itu" },
            { time: 33.0, text: "Kali pertama di hidupku" },
            { time: 38.0, text: "Manusia lain memelukku" },
            { time: 44.2, text: "Lembaran foto hitam-putih" },
            { time: 49.1, text: "Aku coba ingat lagi wangi rumah di sore itu" },
            { time: 55.0, text: "Kue cokelat, balon warna-warni" },
            { time: 60.0, text: "Pesta hari ulang tahunku" },
            { time: 65.3, text: "Di mana pun kalian berada" },
            { time: 70.5, text: "Kukirimkan terima kasih" },
            { time: 75.5, text: "Untuk warna dalam hidupku dan banyak kenangan indah" },
            { time: 85.1, text: "Kau melukis aku" },
            { time: 93.3, text: "Lembaran foto hitam-putih" },
            { time: 98.2, text: "Kembali teringat malam, kuhitung-hitung bintang" },
            { time: 104.00, text: "Saat mataku sulit tidur, mm-mm" },
            { time: 109.0, text: "Suaramu buatku lelap, mm-mm" },
            { time: 117.3, text: "Di mana pun kalian berada" },
            { time: 122.5, text: "Kukirimkan terima kasih" },
            { time: 127.3, text: "Untuk warna dalam hidupku dan banyak kenangan indah" },
            { time: 137.0, text: "Kau melukis aku" },
            { time: 143.0, text: "Kita tak pernah tahu" },
            { time: 147.0, text: "Berapa lama kita diberi waktu" },
            { time: 154.0, text: "Jika aku pergi lebih dulu, jangan lupakan aku" },
            { time: 161.9, text: "Ini lagu untukmu, ungkapan terima kasihku" },
            { time: 175.2, text: "Lembar monokrom hitam-putih" },
            { time: 179.9, text: "Aku coba ingat warna demi warna di hidupku" },
            { time: 186.0, text: "Tak akan ku mengenal cinta" },
            { time: 189.3, text: "Bila bukan kar'na hati baikmu" },
        ]
    },
    {
        id: 7,
        title: "About You",
        artist: "The 1975",
        album: "The 1975",
        albumArtUrl: "https://i.scdn.co/image/ab67616d0000b2731f44db452a68e229650a302c",
        audioSrc: "audio/about you.mp3",
        videoBgSrc: "videos/See You Again - Wiz Khalifa, Charlie Puth.mp4",
        lyrics: [
           { time: 44.9, text: "I know a place" },
            { time: 54.3, text: "It's somewhere I go when I need to remember your face" },
            { time: 64.0, text: "We get married in our heads" },
            { time: 74.5, text: "Something to do while we try to recall how we met" },
            { time: 84.2, text: "Do you think I have forgotten?" },
            { time: 88.8, text: "Do you think I have forgotten?" },
            { time: 94.0, text: "Do you think I have forgotten about you?" },
            { time: 104.0, text: "You and I (don't let go), we're alive (don't let go)" },
            { time: 114.6, text: "With nothing to do, I could lay and just look in your eyes" },
            { time: 124.9, text: "Wait (don't let go), and pretend (don't let go)" },
            { time: 134.8, text: "Hold on, and hope that we'll find our way back in the end (in the end)" },
            { time: 144.0, text: "Do you think I have forgotten?" },
            { time: 149.0, text: "Do you think I have forgotten?" },
            { time: 153.7, text: "Do you think I have forgotten about you?" },
            { time: 163.8, text: "Do you think I have forgotten?" },
            { time: 169.4, text: "Do you think I have forgotten?" },
            { time: 173.8, text: "Do you think I have forgotten about you?" },
            { time: 184.5, text: "And there was something 'bout you that now I can't remember" },
            { time: 189.7, text: "It's the same damn thing that made my heart surrender" },
            { time: 194.4, text: "And I miss you on a train, I miss you in the morning" },
            { time: 200.2, text: "I never know what to think about" },
            { time: 203.4, text: "I think about you (don't let go)" },
            { time: 209.2, text: "About you (don't let go)" },
            { time: 214.0, text: "Do you think I have forgotten about you? (Don't let go)" },
            { time: 224.1, text: "About you" },
            { time: 229.2, text: "About you" },
            { time: 234.0, text: "Do you think I have forgotten about you? (Don't let go)" }

        
        ]
    },
    {
        id: 8,
        title: "Count On Me",
        artist: "Bruno Mars",
        album: "Doo-Wops & Hooligans.",
        albumArtUrl: "https://image-cdn-ak.spotifycdn.com/image/ab67616d00001e027039c1c841fc3dfa2ad8a0d8",
        audioSrc: "audio/count on me.mp3",
        videoBgSrc: "videos/Drag Me Down - One Direction.mp4",
        lyrics: [
    { time: 2.4, text: "Oh-oh-oh" },
    { time: 5.2, text: "If you ever find yourself stuck in the middle of the sea" },
    { time: 10.3, text: "I'll sail the world to find you" },
    { time: 16.0, text: "If you ever find yourself lost in the dark and you can't see" },
    { time: 21.5, text: "I'll be the light to guide you" },
    { time: 28.2, text: "We find out what we're made of" },
    { time: 32.2, text: "When we are called to help our friends in need" },
    { time: 37.0, text: "You can count on me like one, two, three, I'll be there" },
    { time: 45.3, text: "And I know when I need it" },
    { time: 48.3, text: "I can count on you like four, three, two and you'll be there" },
    { time: 56.2, text: "'Cause that's what friends are supposed to do, oh, yeah" },
    { time: 60.7, text: "Ooh-ooh-ooh, ooh-ooh-ooh" },
    { time: 67.3, text: "Yeah, yeah" },
    { time: 69.5, text: "If you're tossin' and you're turnin' and you just can't fall asleep" },
    { time: 75.0, text: "I'll sing a song beside you" },
    { time: 80.5, text: "And if you ever forget how much you really mean to me" },
    { time: 86.0, text: "Every day, I will remind you, oh" },
    { time: 93.0, text: "We find out what we're made of" },
    { time: 96.5, text: "When we are called to help our friends in need" },
    { time: 101.5, text: "You can count on me like one, two, three, I'll be there" },
    { time: 110.0, text: "And I know when I need it" },
    { time: 113.0, text: "I can count on you like four, three, two and you'll be there" },
    { time: 121.0, text: "'Cause that's what friends are supposed to do, oh, yeah" },
    { time: 125.5, text: "Ooh-ooh-ooh, ooh-ooh-ooh" },
    { time: 132.0, text: "Yeah, yeah" },
    { time: 134.6, text: "You'll always have my shoulder when you cry" },
    { time: 145.1, text: "I'll never let go, never say goodbye" },
    { time: 154.5, text: "You know you can count on me like one, two, three, I'll be there" },
    { time: 164.2, text: "And I know when I need it" },
    { time: 167.0, text: "I can count on you like four, three, two and you'll be there" },
    { time: 175.0, text: "'Cause that's what friends are supposed to do, oh, yeah" },
    { time: 179.0, text: "Ooh-ooh-ooh, ooh-ooh-ooh" },
    { time: 185.7, text: "You can count on me 'cause I can count on you" }

        ]
    },
];

let currentSongIndex = 0;
let isPlaying = false;
let isShuffle = false;
let repeatMode = 0; // 0: no repeat, 1: repeat one, 2: repeat all

// ── Persistent state (declared early so all functions can access) ──
let favorites = JSON.parse(localStorage.getItem('zaymix_favorites') || '[]');
let recentlyPlayed = JSON.parse(localStorage.getItem('zaymix_recent') || '[]');
let downloadedSongs = JSON.parse(localStorage.getItem('zaymix_downloads') || '[]');
let songRequests = JSON.parse(localStorage.getItem('zaymix_requests') || '[]');
let appSettings = JSON.parse(localStorage.getItem('zaymix_settings') || '{}');
const defaultSettings = { darkMode: true, cardSize: 'normal', autoplay: true, crossfade: false, crossfadeDuration: 3, normalize: false };
let listenStats = JSON.parse(localStorage.getItem('zaymix_stats') || '{}');
let statsInterval = null;


// Track seconds while playing
let _lastTrackedSongId = null;
audioPlayer.addEventListener('play', () => {
    if (statsInterval) clearInterval(statsInterval);
    if (!currentUser) return;
    // Count as one play only when song starts fresh (currentTime < 3s) or is a different song
    const song = songs[currentSongIndex];
    if (song && (audioPlayer.currentTime < 3 || _lastTrackedSongId !== song.id)) {
        if (_lastTrackedSongId !== song.id) {
            _lastTrackedSongId = song.id;
            trackPlay(song.id); // count one play per song load
        }
    }
    statsInterval = setInterval(() => {
        if (!currentUser) { clearInterval(statsInterval); return; }
        const s = songs[currentSongIndex];
        if (s && isPlaying) {
            if (!listenStats[s.id]) listenStats[s.id] = { plays: 0, totalSeconds: 0 };
            listenStats[s.id].totalSeconds = (listenStats[s.id].totalSeconds || 0) + 1;
            saveStats();
        }
    }, 1000);
});
audioPlayer.addEventListener('pause', () => { if (statsInterval) { clearInterval(statsInterval); statsInterval = null; } });

// --- Page Navigation ---
function showHomePage() {
    playerPage.classList.remove('active');
    songDetailPage.classList.remove('active');
    homePage.classList.add('active');
    bodyElement.classList.remove('player-active-bg', 'detail-active-bg');
    backgroundVideoContainer.classList.remove('active');
    backgroundVideo.pause();
    backgroundVideo.src = '';
    backgroundVideo.load();
    // ✅ Music keeps playing — do NOT pauseTrack() here
    // Refresh home rows to show current state
    renderHomeRecentRow();
    renderHomeFavRow();
    // Update hero to show currently playing song
    if (songs[currentSongIndex]) updateHero(songs[currentSongIndex], currentSongIndex);
    // Show mini bar if music is playing
    syncNowPlayingBar();
}

// Function to display the song detail page (still maintained, but not called from song list click)
function showSongDetailPage(song) {
    homePage.classList.remove('active');
    playerPage.classList.remove('active');
    songDetailPage.classList.add('active');

    detailAlbumArt.src = song.albumArtUrl;
    detailTrackTitle.textContent = song.title;
    detailTrackArtist.textContent = song.artist;
    detailAlbumName.textContent = song.album || "Unknown Album";

    bodyElement.classList.remove('player-active-bg');
    bodyElement.classList.add('detail-active-bg');
    backgroundVideoContainer.classList.remove('active');
    backgroundVideo.pause(); // Pause background video
    backgroundVideo.src = ""; // Empty video src
    backgroundVideo.load();
}

function showPlayerPage() {
    homePage.classList.remove('active');
    songDetailPage.classList.remove('active');
    playerPage.classList.add('active');
    bodyElement.classList.remove('detail-active-bg');
    bodyElement.classList.add('player-active-bg');
    backgroundVideoContainer.classList.add('active');
    hideNowPlayingBar(); // hide mini bar when in full player
    const currentSong = songs[currentSongIndex];
    if (currentSong && currentSong.videoBgSrc) {
        backgroundVideo.src = currentSong.videoBgSrc;
        backgroundVideo.load();
        backgroundVideo.play().catch(e => console.error("Error playing video background:", e));
    } else {
        backgroundVideo.src = "";
        backgroundVideo.load();
    }
}

// --- Home Page Logic ---
function getGreeting() {
    const h = new Date().getHours();
    const name = currentUser ? `, ${currentUser.username}` : '';
    if (h < 12) return `Selamat pagi${name} 🌅`;
    if (h < 17) return `Selamat siang${name} ☀️`;
    if (h < 20) return `Selamat sore${name} 🌆`;
    return `Selamat malam${name} 🌙`;
}

function renderHomePage() {
    // Greeting
    const greetEl = document.getElementById('heroGreeting');
    if (greetEl) greetEl.textContent = getGreeting();

    // Hero - show first song or last played
    const featuredSong = songs[0];
    if (featuredSong) updateHero(featuredSong, 0);

    // Recently played row
    renderHomeRecentRow();

    // Favorites row
    renderHomeFavRow();

    // All songs grid
    renderSongList();
}

function updateHero(song, idx) {
    document.getElementById('heroArt').src = song.albumArtUrl;
    document.getElementById('heroTitle').textContent = song.title;
    document.getElementById('heroArtist').textContent = song.artist;
    document.getElementById('heroAlbum').textContent = song.album || '';
    document.getElementById('heroBgBlur').style.backgroundImage = `url(${song.albumArtUrl})`;
    const playBtn = document.getElementById('heroPlayBtn');
    playBtn.onclick = () => {
        currentSongIndex = idx;
        loadSong(songs[idx]);
        playTrack();
        showPlayerPage();
    };
}

function renderHomeRecentRow() {
    const section = document.getElementById('recentSection');
    const row = document.getElementById('recentRow');
    if (!recentlyPlayed.length) { section.style.display = 'none'; return; }
    section.style.display = '';
    row.innerHTML = '';
    const toShow = recentlyPlayed.slice(0, 10);
    toShow.forEach(entry => {
        const songObj = songs.find(s => s.id === entry.id);
        const idx = songObj ? songs.indexOf(songObj) : -1;
        const card = document.createElement('div');
        card.className = 'mini-card';
        if (document._miniCardWidth) card.style.width = document._miniCardWidth;
        card.innerHTML = `
            <div class="mini-card-art-wrap">
                <img src="${entry.albumArtUrl}" class="mini-card-art" alt="">
                <div class="mini-card-overlay"><i class="fas fa-play"></i></div>
            </div>
            <div class="mini-card-info">
                <div class="mini-card-title">${entry.title}</div>
                <div class="mini-card-artist">${entry.artist}</div>
            </div>`;
        if (idx >= 0) {
            card.addEventListener('click', () => {
                currentSongIndex = idx;
                loadSong(songs[idx]);
                playTrack();
                showPlayerPage();
            });
            // Hover updates hero
            card.addEventListener('mouseenter', () => updateHero(songObj, idx));
        }
        row.appendChild(card);
    });
}

function renderHomeFavRow() {
    const section = document.getElementById('favSection');
    const row = document.getElementById('favRow');
    const favSongs = songs.filter(s => isFavorite(s.id));
    if (!favSongs.length) { section.style.display = 'none'; return; }
    section.style.display = '';
    row.innerHTML = '';
    favSongs.forEach(song => {
        const idx = songs.indexOf(song);
        const card = document.createElement('div');
        card.className = 'mini-card';
        if (document._miniCardWidth) card.style.width = document._miniCardWidth;
        card.innerHTML = `
            <div class="mini-card-art-wrap">
                <img src="${song.albumArtUrl}" class="mini-card-art" alt="">
                <div class="mini-card-overlay"><i class="fas fa-play"></i></div>
            </div>
            <div class="mini-card-info">
                <div class="mini-card-title">${song.title}</div>
                <div class="mini-card-artist">${song.artist}</div>
            </div>`;
        card.addEventListener('click', () => {
            currentSongIndex = idx;
            loadSong(songs[idx]);
            playTrack();
            showPlayerPage();
        });
        card.addEventListener('mouseenter', () => updateHero(song, idx));
        row.appendChild(card);
    });
}

// ── "See All" button wiring ────────────────────────────────
document.getElementById('seeAllRecent').addEventListener('click', () => {
    showPanel('sidebarRecentPanel');
    renderRecentList();
    openSidebar();
});
document.getElementById('seeAllFav').addEventListener('click', () => {
    showPanel('sidebarFavPanel');
    renderFavoritesList();
    openSidebar();
});

function renderSongList() {
    const songListElement = document.getElementById('songList');

    // Show loader using class
    songListElement.innerHTML = `<div class="loader-wrapper">
        <span class="loader-letter">L</span><span class="loader-letter">o</span>
        <span class="loader-letter">a</span><span class="loader-letter">d</span>
        <span class="loader-letter">i</span><span class="loader-letter">n</span>
        <span class="loader-letter">g</span>
        <div class="loader"></div>
    </div>`;
    songListElement.classList.add('is-loading');

    setTimeout(() => {
        songListElement.classList.remove('is-loading');
        songListElement.innerHTML = '';

        if (!songs.length) {
            songListElement.innerHTML = '<div style="grid-column:1/-1;padding:2.5rem;text-align:center;color:var(--text-muted);font-size:0.9rem"><i class="fas fa-music" style="font-size:2rem;display:block;margin-bottom:0.7rem;opacity:0.3"></i>Tidak ada lagu tersedia.</div>';
            return;
        }
        songs.forEach((song, index) => {
            const fav = isFavorite(song.id);
            const card = document.createElement('div');
            card.className = 'song-card';
            card.setAttribute('data-id', song.id);
            card.innerHTML = `
                <div class="song-card-art-wrapper">
                    <img src="${song.albumArtUrl}" alt="${song.title}" class="song-card-art" loading="lazy">
                    <div class="song-card-play-overlay"><i class="fas fa-play-circle"></i></div>
                    <button class="song-card-fav-btn ${fav ? 'is-fav' : ''}" data-id="${song.id}" title="Favorit">
                        <i class="${fav ? 'fas' : 'far'} fa-heart"></i>
                    </button>
                </div>
                <div class="song-card-info">
                    <h3 class="song-card-title">${song.title}</h3>
                    <p class="song-card-artist">${song.artist}</p>
                </div>`;
            card.addEventListener('click', (e) => {
                if (e.target.closest('.song-card-fav-btn')) return;
                currentSongIndex = index;
                loadSong(songs[index]);
                playTrack();
                showPlayerPage();
            });
            card.querySelector('.song-card-fav-btn').addEventListener('click', (e) => {
                e.stopPropagation();
                toggleFavorite(song.id);
                renderHomeFavRow();
            });
            card.addEventListener('mouseenter', () => {
                updateHero(song, index);
                if (song.videoBgSrc && homePage.classList.contains('active')) {
                    backgroundVideo.src = song.videoBgSrc;
                    backgroundVideo.load();
                    backgroundVideoContainer.classList.add('active');
                    backgroundVideo.play().catch(() => {});
                    bodyElement.classList.add('player-active-bg');
                }
            });
            card.addEventListener('mouseleave', () => {
                if (homePage.classList.contains('active')) {
                    backgroundVideoContainer.classList.remove('active');
                    backgroundVideo.pause();
                    backgroundVideo.src = '';
                    backgroundVideo.load();
                    bodyElement.classList.remove('player-active-bg');
                }
            });
            songListElement.appendChild(card);
        });
    }, 900);
}

// --- Player Logic ---
function loadSong(song) {
    if (!song) {
        console.error("Song not found!");
        albumArtPlayer.src = "https://placehold.co/100x100/3a3a4e/e0e0e0?text=Error";
        playerTrackTitle.textContent = "Song Not Available";
        playerTrackArtist.textContent = "-";
        lyricsContainer.innerHTML = "<p>Lyrics are not available.</p>"; // Replace text Content with inner HTML
        audioPlayer.src = "";
        playerCurrentTime.textContent = "0:00";
        playerTotalDuration.textContent = "0:00";
        playerProgressBar.style.width = "0%";
        return;
    }
    albumArtPlayer.src = song.albumArtUrl;
    playerTrackTitle.textContent = song.title;
    playerTrackArtist.textContent = song.artist;
    // Play count tracked on actual audio play event (not on load)
    
    renderLyrics(song.lyrics); // Call the render Lyrics function
    
    audioPlayer.src = song.audioSrc;

    audioPlayer.onloadedmetadata = () => {
        playerTotalDuration.textContent = formatTime(audioPlayer.duration);
    };
    audioPlayer.load();
    updatePlayPauseIcon();
    setTimeout(() => {
        updatePlayerFavBtn();
        updateDownloadBtn();
        addToRecent(song);
        updateNowPlayingBar(); // refresh mini bar
    }, 0);
}

// New function to render lyrics
// renderLyrics defined below


function playTrack() {
    if (!audioPlayer.src || audioPlayer.src === window.location.href) {
        if (songs.length > 0) {
            loadSong(songs[currentSongIndex]);
        } else {
            console.log("There are no songs to play.");
            return;
        }
    }
    isPlaying = true;
    audioPlayer.play().catch(error => console.error("Error while playing:", error));
    updatePlayPauseIcon();
    updateNowPlayingPlayBtn();
}

function pauseTrack() {
    isPlaying = false;
    audioPlayer.pause();
    updatePlayPauseIcon();
    updateNowPlayingPlayBtn();
}

function updatePlayPauseIcon() {
    if (isPlaying) {
        playerPlayPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        playerPlayPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    }
}

function prevTrack() {
    if (songs.length === 0) return;
    if (isShuffle) {
        playRandomTrack();
    } else {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage(); // Update background video
}

function nextTrackLogic() {
    if (songs.length === 0) return;
    if (isShuffle) {
        playRandomTrack();
    } else {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage(); // Update background video
}

function nextTrack() {
    if (songs.length === 0) return;

    if (repeatMode === 1 && audioPlayer.ended) {
        // Handled by audio.loop = true
    } else if (isShuffle) {
        playRandomTrack();
    } else {
        currentSongIndex++;
        if (currentSongIndex >= songs.length) {
            if (repeatMode === 2) {
                currentSongIndex = 0;
            } else {
                currentSongIndex = songs.length - 1;
                loadSong(songs[currentSongIndex]);
                pauseTrack();
                audioPlayer.currentTime = audioPlayer.duration;
                return;
            }
        }
        loadSong(songs[currentSongIndex]);
        playTrack();
    }
    showPlayerPage(); // Update background video
}

function playRandomTrack() {
    if (songs.length <= 1) {
        currentSongIndex = 0;
    } else {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * songs.length);
        } while (randomIndex === currentSongIndex);
        currentSongIndex = randomIndex;
    }
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage(); // Update background video
}


audioPlayer.addEventListener('timeupdate', () => {
    if (audioPlayer.duration) {
        const progressPercent = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        playerProgressBar.style.width = `${progressPercent}%`;
        playerCurrentTime.textContent = formatTime(audioPlayer.currentTime);
        
        // Apple Music lyric char glow
        if (typeof updateLyricGlow === 'function') updateLyricGlow(audioPlayer.currentTime);
        // Update karaoke if open
        if (typeof updateKaraokeLines === 'function') updateKaraokeLines();
        // Update mini now-playing bar progress
        const fill = document.getElementById('nowPlayingBar_fill');
        if (fill) fill.style.width = `${(audioPlayer.currentTime / audioPlayer.duration) * 100}%`;
    }
});

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

playerProgressBarContainer.addEventListener('click', (e) => {
    if (!audioPlayer.duration || songs.length === 0) return;
    const width = playerProgressBarContainer.clientWidth;
    const clickX = e.offsetX;
    audioPlayer.currentTime = (clickX / width) * audioPlayer.duration;
});

playerVolumeSlider.addEventListener('input', (e) => {
    audioPlayer.volume = e.target.value;
});

// Event Listener for speed slider
playerSpeedSlider.addEventListener('input', (e) => {
    audioPlayer.playbackRate = parseFloat(e.target.value);
    currentSpeedDisplay.textContent = `${audioPlayer.playbackRate.toFixed(2)}x`;
});


playerShuffleBtn.addEventListener('click', () => {
    isShuffle = !isShuffle;
    playerShuffleBtn.classList.toggle('active-feature', isShuffle);
    console.log("Shuffle: " + isShuffle);
});

playerRepeatBtn.addEventListener('click', () => {
    repeatMode = (repeatMode + 1) % 3;
    updateRepeatButtonUI();
    console.log("Repeat Mode: " + repeatMode);
});

function updateRepeatButtonUI() {
    playerRepeatBtn.classList.remove('active-feature');
    audioPlayer.loop = false;

    if (repeatMode === 0) {
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat"></i>';
    } else if (repeatMode === 1) {
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat-1"></i>';
        playerRepeatBtn.classList.add('active-feature');
        audioPlayer.loop = true;
    } else {
        playerRepeatBtn.innerHTML = '<i class="fas fa-repeat"></i>';
        playerRepeatBtn.classList.add('active-feature');
    }
}

playerPlayPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        pauseTrack();
    } else {
        playTrack();
    }
});
playerPrevBtn.addEventListener('click', prevTrack);
playerNextBtn.addEventListener('click', nextTrackLogic);

// Note: audioPlayer 'ended' event is handled in the Sleep Timer section below

// Event Listeners for navigation buttons
backToHomeFromDetailBtn.addEventListener('click', showHomePage); // From detail page to home
backToHomeBtn.addEventListener('click', showHomePage); // From the landing page to the home page

// Event Listener for the play button from the details page (if you want to use it)
playFromDetailBtn.addEventListener('click', () => {
    loadSong(songs[currentSongIndex]);
    playTrack();
    showPlayerPage();
});

// ── New sidebar routes ─────────────────────────────────────
document.getElementById('navStats').addEventListener('click', () => { showPanel('sidebarStatsPanel'); renderStats(); });
document.getElementById('navBugReport').addEventListener('click', () => { showPanel('sidebarBugPanel'); });
document.getElementById('backFromStats').addEventListener('click', showMainSidebarPanel);
document.getElementById('backFromBug').addEventListener('click', showMainSidebarPanel);
document.getElementById('backFromProfile').addEventListener('click', showMainSidebarPanel);

// navLogin — opens login or profile depending on state
document.getElementById('navLogin').addEventListener('click', () => {
    if (currentUser) {
        showPanel('sidebarProfilePanel');
        renderProfilePanel();
    } else {
        closeSidebar();
        openLoginModal();
    }
});

// Navbar karaoke + visualizer
document.getElementById('navbarKaraokeBtn')?.addEventListener('click', openKaraoke);
document.getElementById('navbarVisualizerBtn')?.addEventListener('click', openVisualizer);

// ── Bug Report / Feature Request Form ─────────────────────
// bugForm: handled by cloneNode fix below

// Karaoke: see new implementation below

// ══════════════════════════════════════════════════════════
// FEATURE 2: AUDIO VISUALIZER
// ══════════════════════════════════════════════════════════
let vizAnimFrame = null;
let vizStyle = 'bars';
let vizParticles = [];

function openVisualizer() {
    const modal = document.getElementById('visualizerModal');
    const song = songs[currentSongIndex];
    if (!song) { showToast('⚠️ Pilih lagu dulu!'); return; }
    modal.classList.remove('hidden');
    document.getElementById('vizArt').src = song.albumArtUrl;
    document.getElementById('vizTitle').textContent = song.title;
    document.getElementById('vizArtist').textContent = song.artist;
    setupAudioContext();
    startVisualizer();
    if (!isPlaying) playTrack();
}
function closeVisualizer() {
    document.getElementById('visualizerModal').classList.add('hidden');
    if (vizAnimFrame) { cancelAnimationFrame(vizAnimFrame); vizAnimFrame = null; }
}
document.getElementById('visualizerClose').addEventListener('click', closeVisualizer);
document.getElementById('playerVisualizerBtn').addEventListener('click', openVisualizer);
document.getElementById('playerKaraokeBtn')?.addEventListener('click', openKaraoke);
document.querySelectorAll('.viz-style-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.viz-style-btn').forEach(b => b.classList.remove('active-viz-btn'));
        btn.classList.add('active-viz-btn');
        vizStyle = btn.dataset.style;
        if (vizStyle === 'particles') vizParticles = [];
    });
});

function startVisualizer() {
    if (vizAnimFrame) cancelAnimationFrame(vizAnimFrame);
    const canvas = document.getElementById('vizCanvas');
    const ctx = canvas.getContext('2d');
    function resize() {
        canvas.width = canvas.offsetWidth * window.devicePixelRatio;
        canvas.height = canvas.offsetHeight * window.devicePixelRatio;
        ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    }
    resize();
    window.addEventListener('resize', resize);

    function draw() {
        vizAnimFrame = requestAnimationFrame(draw);
        const W = canvas.offsetWidth, H = canvas.offsetHeight;
        ctx.clearRect(0, 0, W, H);

        let dataArray = null;
        if (eqInited && analyserNode) {
            const bufLen = analyserNode.frequencyBinCount;
            dataArray = new Uint8Array(bufLen);
            analyserNode.getByteFrequencyData(dataArray);
        }

        if (!dataArray || !isPlaying) {
            // Idle animation
            ctx.fillStyle = 'rgba(183,108,255,0.15)';
            const bars = 32;
            for (let i = 0; i < bars; i++) {
                const h = Math.random() * 8 + 2;
                ctx.fillRect((i / bars) * W, H / 2 - h / 2, W / bars - 2, h);
            }
            return;
        }

        const accent = [183, 108, 255];
        const accent2 = [96, 165, 250];

        if (vizStyle === 'bars') {
            const bars = 64;
            const step = Math.floor(dataArray.length / bars);
            const barW = W / bars - 1;
            for (let i = 0; i < bars; i++) {
                const val = dataArray[i * step] / 255;
                const h = val * H * 0.85;
                const hue = 260 + val * 60;
                const grad = ctx.createLinearGradient(0, H, 0, H - h);
                grad.addColorStop(0, `hsla(${hue},80%,55%,0.9)`);
                grad.addColorStop(1, `hsla(${hue + 30},90%,75%,0.95)`);
                ctx.fillStyle = grad;
                ctx.beginPath();
                ctx.roundRect(i * (barW + 1), H - h, barW, h, [3, 3, 0, 0]);
                ctx.fill();
            }
        } else if (vizStyle === 'wave') {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${accent.join(',')},0.9)`;
            ctx.lineWidth = 2;
            const sliceW = W / dataArray.length;
            let x = 0;
            for (let i = 0; i < dataArray.length; i++) {
                const v = dataArray[i] / 128;
                const y = (v * H) / 2;
                i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
                x += sliceW;
            }
            ctx.lineTo(W, H / 2);
            ctx.stroke();
            ctx.strokeStyle = `rgba(${accent2.join(',')},0.5)`;
            ctx.lineWidth = 1;
            x = 0;
            ctx.beginPath();
            for (let i = 0; i < dataArray.length; i++) {
                const v = (255 - dataArray[i]) / 128;
                const y = (v * H) / 2;
                i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
                x += sliceW;
            }
            ctx.stroke();
        } else if (vizStyle === 'circle') {
            const cx = W / 2, cy = H / 2, r = Math.min(W, H) * 0.3;
            ctx.strokeStyle = `rgba(${accent.join(',')},0.7)`;
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.arc(cx, cy, r, 0, Math.PI * 2);
            ctx.stroke();
            for (let i = 0; i < dataArray.length; i += 4) {
                const angle = (i / dataArray.length) * Math.PI * 2;
                const amp = (dataArray[i] / 255) * r * 0.8;
                const x1 = cx + Math.cos(angle) * r;
                const y1 = cy + Math.sin(angle) * r;
                const x2 = cx + Math.cos(angle) * (r + amp);
                const y2 = cy + Math.sin(angle) * (r + amp);
                const hue = 260 + (dataArray[i] / 255) * 80;
                ctx.strokeStyle = `hsla(${hue},80%,65%,0.8)`;
                ctx.lineWidth = 1.5;
                ctx.beginPath();
                ctx.moveTo(x1, y1);
                ctx.lineTo(x2, y2);
                ctx.stroke();
            }
        } else if (vizStyle === 'particles') {
            const energy = dataArray.reduce((s, v) => s + v, 0) / dataArray.length / 255;
            if (Math.random() < energy * 3) {
                vizParticles.push({ x: Math.random() * W, y: H, vx: (Math.random() - 0.5) * 3, vy: -(2 + energy * 8), life: 1, size: 2 + energy * 6, hue: 260 + Math.random() * 80 });
            }
            vizParticles = vizParticles.filter(p => p.life > 0);
            vizParticles.forEach(p => {
                p.x += p.vx; p.y += p.vy; p.vy += 0.05; p.life -= 0.018;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
                ctx.fillStyle = `hsla(${p.hue},80%,65%,${p.life})`;
                ctx.fill();
            });
        }
    }
    draw();
}

// setupAudioContext is defined later in the EQ section with analyserNode support

// ══════════════════════════════════════════════════════════
// FEATURE 3: SHARE CARD GENERATOR
// ══════════════════════════════════════════════════════════
document.getElementById('playerShareBtn').addEventListener('click', generateShareCard);

async function generateShareCard() {
    const song = songs[currentSongIndex];
    if (!song) { showToast('⚠️ Pilih lagu dulu!'); return; }
    showToast('🎨 Membuat share card...');
    const canvas = document.getElementById('shareCardCanvas');
    const ctx = canvas.getContext('2d');
    const W = 800, H = 420;
    canvas.width = W; canvas.height = H;

    // Background gradient
    const grad = ctx.createLinearGradient(0, 0, W, H);
    grad.addColorStop(0, '#0d0014');
    grad.addColorStop(0.5, '#2e0050');
    grad.addColorStop(1, '#0d0014');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);

    // Decorative circles
    ctx.beginPath();
    ctx.arc(W * 0.75, H * 0.3, 200, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(183,108,255,0.08)';
    ctx.fill();
    ctx.beginPath();
    ctx.arc(W * 0.1, H * 0.8, 120, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(124,58,237,0.06)';
    ctx.fill();

    // Album art
    try {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        await new Promise((res, rej) => { img.onload = res; img.onerror = rej; img.src = song.albumArtUrl; });
        // Rounded rect clip
        ctx.save();
        ctx.beginPath();
        const artX = 60, artY = H / 2 - 110, artS = 220;
        ctx.roundRect(artX, artY, artS, artS, 20);
        ctx.clip();
        ctx.drawImage(img, artX, artY, artS, artS);
        ctx.restore();
    } catch {}

    // Text info
    ctx.textBaseline = 'top';
    ctx.fillStyle = 'rgba(255,255,255,0.35)';
    ctx.font = 'bold 13px "DM Sans", sans-serif';
    ctx.fillText('NOW PLAYING', 320, 80);
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 36px "Syne", sans-serif';
    const titleLines = wrapText(ctx, song.title, 320, W - 80, 36);
    titleLines.forEach((line, i) => ctx.fillText(line, 320, 115 + i * 44));
    ctx.fillStyle = 'rgba(255,255,255,0.6)';
    ctx.font = '20px "DM Sans", sans-serif';
    ctx.fillText(song.artist, 320, 115 + titleLines.length * 44 + 8);
    ctx.fillStyle = 'rgba(255,255,255,0.25)';
    ctx.font = '13px "DM Sans", sans-serif';
    ctx.fillText(song.album || '', 320, 115 + titleLines.length * 44 + 40);

    // Zaymix branding
    ctx.fillStyle = 'rgba(183,108,255,0.8)';
    ctx.font = 'bold 18px "Syne", sans-serif';
    ctx.fillText('⚡ Zaymix', 60, H - 55);
    ctx.fillStyle = 'rgba(255,255,255,0.3)';
    ctx.font = '12px "DM Sans", sans-serif';
    ctx.fillText('life needs music', 60, H - 32);

    // Progress bar decoration
    ctx.fillStyle = 'rgba(255,255,255,0.06)';
    ctx.fillRect(320, H - 55, W - 380, 3);
    if (audioPlayer.duration) {
        const pct = audioPlayer.currentTime / audioPlayer.duration;
        ctx.fillStyle = 'rgba(183,108,255,0.8)';
        ctx.fillRect(320, H - 55, (W - 380) * pct, 3);
    }

    const dataUrl = canvas.toDataURL('image/png');
    document.getElementById('shareCardImg').src = dataUrl;
    document.getElementById('sharePreviewModal').classList.remove('hidden');

    document.getElementById('shareDownloadBtn').onclick = () => {
        const a = document.createElement('a');
        a.href = dataUrl;
        a.download = `zaymix-${song.title.replace(/[^a-z0-9]/gi,'_')}.png`;
        a.click();
        showToast('📥 Gambar tersimpan!');
    };
    document.getElementById('shareCopyBtn').onclick = () => {
        const songUrl = song.audioSrc ? (window.location.origin + '/' + song.audioSrc) : window.location.href;
        navigator.clipboard.writeText(songUrl).then(() => showToast('✅ Link lagu disalin!')).catch(() => showToast('⚠️ Copy gagal'));
    };
}
function wrapText(ctx, text, x, maxW, fontSize) {
    const words = text.split(' ');
    const lines = [];
    let line = '';
    for (const w of words) {
        const test = line + (line ? ' ' : '') + w;
        if (ctx.measureText(test).width > maxW - x && line) { lines.push(line); line = w; }
        else line = test;
    }
    if (line) lines.push(line);
    return lines.slice(0, 2);
}
document.getElementById('shareModalClose').addEventListener('click', () => { document.getElementById('sharePreviewModal').classList.add('hidden'); });

// Stats: see new renderStats() implementation below

// ══════════════════════════════════════════════════════════
// FEATURE 5: DYNAMIC COLOR THEME from album art
// ══════════════════════════════════════════════════════════
function extractDominantColor(imgUrl, callback) {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = 32; canvas.height = 32;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, 32, 32);
        const data = ctx.getImageData(0, 0, 32, 32).data;
        let r = 0, g = 0, b = 0, count = 0;
        for (let i = 0; i < data.length; i += 16) {
            r += data[i]; g += data[i+1]; b += data[i+2]; count++;
        }
        r = Math.round(r / count); g = Math.round(g / count); b = Math.round(b / count);
        // Boost saturation
        const max = Math.max(r, g, b), min = Math.min(r, g, b);
        const boost = 1.4;
        r = Math.min(255, Math.round(128 + (r - 128) * boost));
        g = Math.min(255, Math.round(128 + (g - 128) * boost));
        b = Math.min(255, Math.round(128 + (b - 128) * boost));
        callback(r, g, b);
    };
    img.onerror = () => callback(183, 108, 255); // fallback accent
    img.src = imgUrl;
}
function applyColorTheme(r, g, b) {
    const root = document.documentElement;
    // Update CSS variables for dynamic color
    root.style.setProperty('--accent', `rgb(${r},${g},${b})`);
    root.style.setProperty('--accent-dim', `rgba(${r},${g},${b},0.18)`);
    // Add color bar to player
    let bar = document.querySelector('.player-color-bar');
    if (!bar) {
        bar = document.createElement('div');
        bar.className = 'player-color-bar';
        const box = document.querySelector('.music-player-box');
        if (box) box.insertBefore(bar, box.firstChild);
    }
    bar.style.background = `linear-gradient(90deg, rgba(${r},${g},${b},0),rgba(${r},${g},${b},0.8),rgba(${r},${g},${b},0))`;
}

// Hook color theme into loadSong via observer on album art change
const albumArtObserver = new MutationObserver(() => {
    const src = albumArtPlayer.src;
    if (src && !src.includes('placehold')) {
        extractDominantColor(src, (r, g, b) => applyColorTheme(r, g, b));
    }
});
albumArtObserver.observe(albumArtPlayer, { attributes: true, attributeFilter: ['src'] });

// ══════════════════════════════════════════════════════════
// LOGIN / AUTH SYSTEM
// ══════════════════════════════════════════════════════════
let currentUser = JSON.parse(localStorage.getItem('zaymix_user') || 'null');
let userDb = JSON.parse(localStorage.getItem('zaymix_userdb') || '{}');
let selectedAvatarColor = '#7c3aed';
function saveUserDb() { localStorage.setItem('zaymix_userdb', JSON.stringify(userDb)); }
function saveCurrentUser() { localStorage.setItem('zaymix_user', JSON.stringify(currentUser)); }
function openLoginModal() { document.getElementById('loginModal').classList.remove('hidden'); switchAuthTab('login'); }
function closeLoginModal() { document.getElementById('loginModal').classList.add('hidden'); }
document.getElementById('loginModalClose').addEventListener('click', closeLoginModal);
document.getElementById('loginModal').addEventListener('click', (e) => { if (e.target.id === 'loginModal') closeLoginModal(); });
document.getElementById('tabLogin').addEventListener('click', () => switchAuthTab('login'));
document.getElementById('tabRegister').addEventListener('click', () => switchAuthTab('register'));
function switchAuthTab(tab) {
    const isLogin = tab === 'login';
    document.getElementById('authLoginForm').classList.toggle('hidden', !isLogin);
    document.getElementById('authRegisterForm').classList.toggle('hidden', isLogin);
    document.getElementById('tabLogin').classList.toggle('active-tab', isLogin);
    document.getElementById('tabRegister').classList.toggle('active-tab', !isLogin);
}
document.getElementById('toggleLoginPwd').addEventListener('click', () => { const i = document.getElementById('loginPassword'); const b = document.getElementById('toggleLoginPwd').querySelector('i'); const s = i.type === 'password'; i.type = s ? 'text' : 'password'; b.className = s ? 'fas fa-eye-slash' : 'fas fa-eye'; });
document.getElementById('toggleRegPwd').addEventListener('click', () => { const i = document.getElementById('regPassword'); const b = document.getElementById('toggleRegPwd').querySelector('i'); const s = i.type === 'password'; i.type = s ? 'text' : 'password'; b.className = s ? 'fas fa-eye-slash' : 'fas fa-eye'; });
document.querySelectorAll('.auth-avatar-pick').forEach(btn => { btn.addEventListener('click', () => { document.querySelectorAll('.auth-avatar-pick').forEach(b => b.classList.remove('active-avatar')); btn.classList.add('active-avatar'); selectedAvatarColor = btn.dataset.color; }); });
document.getElementById('regSubmitBtn').addEventListener('click', () => {
    const username = document.getElementById('regUsername').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const password = document.getElementById('regPassword').value;
    const errEl = document.getElementById('regError');
    errEl.classList.add('hidden');
    if (!username || username.length < 3) { errEl.textContent = '⚠️ Username minimal 3 karakter'; errEl.classList.remove('hidden'); return; }
    if (!email.includes('@')) { errEl.textContent = '⚠️ Email tidak valid'; errEl.classList.remove('hidden'); return; }
    if (!password || password.length < 6) { errEl.textContent = '⚠️ Password minimal 6 karakter'; errEl.classList.remove('hidden'); return; }
    if (userDb[username.toLowerCase()]) { errEl.textContent = '⚠️ Username sudah digunakan'; errEl.classList.remove('hidden'); return; }
    const user = { username, email, password: btoa(password), avatarColor: selectedAvatarColor, joinDate: Date.now(), role: 'member' };
    userDb[username.toLowerCase()] = user; saveUserDb(); loginUser(user); closeLoginModal();
    showToast(`🎉 Akun "${username}" berhasil dibuat!`);
});
document.getElementById('loginSubmitBtn').addEventListener('click', () => {
    const username = document.getElementById('loginUsername').value.trim();
    const password = document.getElementById('loginPassword').value;
    const errEl = document.getElementById('loginError');
    errEl.classList.add('hidden');
    if (!username || !password) { errEl.textContent = '⚠️ Isi username dan password'; errEl.classList.remove('hidden'); return; }
    const user = userDb[username.toLowerCase()];
    if (!user || user.password !== btoa(password)) { errEl.textContent = '❌ Username atau password salah'; errEl.classList.remove('hidden'); return; }
    loginUser(user); closeLoginModal(); showToast(`👋 Halo kembali, ${user.username}!`);
});
document.getElementById('loginAsGuest').addEventListener('click', () => { currentUser = null; saveCurrentUser(); closeLoginModal(); updateNavUserBtn(); showToast('👤 Mode tamu aktif — fitur terbatas'); });




function guestLockedBar(featureName) {
    return `<div class="guest-locked-bar"><i class="fas fa-lock"></i><span>${featureName} hanya untuk member.</span><button onclick="closeSidebar();openLoginModal()">Login</button></div>`;
}
// Restore session
if (currentUser) { const s = userDb[currentUser.username?.toLowerCase()]; if (s) currentUser = s; }

// ══════════════════════════════════════════════════════════
// FIX STATS — working listeners with proper cleanup
// ══════════════════════════════════════════════════════════
// (statsInterval declared earlier; rebind here to avoid duplicate)


// ══════════════════════════════════════════════════════════
// KARAOKE REDESIGNED
// ══════════════════════════════════════════════════════════
let karaokeParticleInterval = null;
let karaokeVizFrame = null;
let karaokeShowViz = true;
let lastKaraokeIdx = -1;

function openKaraoke() {
    const modal = document.getElementById('karaokeModal');
    const song = songs[currentSongIndex];
    if (!song) { showToast('⚠️ Pilih lagu dulu!'); return; }
    modal.classList.remove('hidden');
    document.getElementById('karaokeArt').src = song.albumArtUrl;
    document.getElementById('karaokeTitle').textContent = song.title;
    document.getElementById('karaokeArtist').textContent = song.artist;
    document.getElementById('karaokeBgBlur').style.backgroundImage = `url(${song.albumArtUrl})`;
    lastKaraokeIdx = -1;
    startKaraokeParticles();
    startKaraokeViz();
    if (!isPlaying) playTrack();
    updateKaraokeLines(); updateKaraokePlayBtn();
}
function closeKaraoke() { document.getElementById('karaokeModal').classList.add('hidden'); stopKaraokeParticles(); stopKaraokeViz(); }
function startKaraokeParticles() {
    stopKaraokeParticles();
    const container = document.getElementById('karaokeParticles');
    karaokeParticleInterval = setInterval(() => {
        if (document.getElementById('karaokeModal').classList.contains('hidden')) return;
        const p = document.createElement('div'); p.className = 'karaoke-particle';
        const size = 4 + Math.random() * 10; const hue = 260 + Math.random() * 80;
        p.style.cssText = `width:${size}px;height:${size}px;left:${Math.random()*100}%;background:hsla(${hue},70%,65%,0.7);animation-duration:${5+Math.random()*6}s`;
        container.appendChild(p); setTimeout(() => p.remove(), 11000);
    }, 400);
}
function stopKaraokeParticles() { clearInterval(karaokeParticleInterval); }
function startKaraokeViz() {
    stopKaraokeViz(); setupAudioContext();
    const canvas = document.getElementById('karaokeVizCanvas'); const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth; canvas.height = 80;
    function draw() {
        karaokeVizFrame = requestAnimationFrame(draw);
        const W = canvas.width, H = canvas.height;
        ctx.clearRect(0, 0, W, H);
        if (!karaokeShowViz) return;
        const bars = 80; let data = null;
        if (eqInited && analyserNode) { data = new Uint8Array(analyserNode.frequencyBinCount); analyserNode.getByteFrequencyData(data); }
        for (let i = 0; i < bars; i++) {
            const val = data ? data[Math.floor(i*data.length/bars)]/255 : Math.random()*0.08;
            const h = val * H; const hue = 260 + val * 80;
            ctx.fillStyle = `hsla(${hue},80%,65%,${0.3+val*0.5})`;
            ctx.fillRect(i*(W/bars), H-h, W/bars-1, h);
        }
    }
    draw();
}
function stopKaraokeViz() { if (karaokeVizFrame) { cancelAnimationFrame(karaokeVizFrame); karaokeVizFrame = null; } }
document.getElementById('karaokeClose').addEventListener('click', closeKaraoke);
document.getElementById('karaokeVisualizerToggle').addEventListener('click', () => {
    karaokeShowViz = !karaokeShowViz;
    document.getElementById('karaokeVizCanvas').classList.toggle('viz-hidden', !karaokeShowViz);
});
document.getElementById('karaokePlayPause').addEventListener('click', () => { if (isPlaying) pauseTrack(); else playTrack(); updateKaraokePlayBtn(); });
document.getElementById('kPrevBtn').addEventListener('click', prevTrack);
document.getElementById('kNextBtn').addEventListener('click', nextTrackLogic);
function updateKaraokePlayBtn() {
    const btn = document.getElementById('karaokePlayPause');
    if (btn) btn.innerHTML = isPlaying ? '<i class="fas fa-pause"></i>' : '<i class="fas fa-play"></i>';
    const art = document.getElementById('karaokeArt'); if (art) art.classList.toggle('playing', isPlaying);
}
function updateKaraokeLines() {
    const modal = document.getElementById('karaokeModal');
    if (modal.classList.contains('hidden')) return;
    const song = songs[currentSongIndex];
    const t = audioPlayer.currentTime, dur = audioPlayer.duration || 0;
    if (song) {
        document.getElementById('karaokeArt').src = song.albumArtUrl;
        document.getElementById('karaokeTitle').textContent = song.title;
        document.getElementById('karaokeArtist').textContent = song.artist;
        document.getElementById('karaokeBgBlur').style.backgroundImage = `url(${song.albumArtUrl})`;
    }
    if (dur) {
        const pct = (t/dur)*100;
        document.getElementById('karaokeProgressFill').style.width = `${pct}%`;
        document.getElementById('karaokeProgressThumb').style.left = `${pct}%`;
        document.getElementById('karaokeCurrTime').textContent = formatTime(t);
        document.getElementById('karaokeTotalTime').textContent = formatTime(dur);
    }
    if (!song?.lyrics?.length) { document.getElementById('kCurr').textContent = '♪  ♪  ♪'; document.getElementById('kPrev').textContent = ''; document.getElementById('kNext').textContent = ''; return; }
    const lyrics = song.lyrics; let idx = 0;
    for (let i = 0; i < lyrics.length; i++) { if (t >= lyrics[i].time) idx = i; else break; }
    if (idx !== lastKaraokeIdx) {
        lastKaraokeIdx = idx;
        const curr = document.getElementById('kCurr');
        curr.classList.remove('new-line'); void curr.offsetWidth; curr.classList.add('new-line');
    }
    document.getElementById('kPrev').textContent = idx > 0 ? lyrics[idx-1].text : '';
    document.getElementById('kCurr').textContent = lyrics[idx].text;
    document.getElementById('kNext').textContent = idx < lyrics.length-1 ? lyrics[idx+1].text : '';
    updateKaraokePlayBtn();
}

const nowPlayingBar = document.getElementById('nowPlayingBar');

function updateNowPlayingBar() {
    const song = songs[currentSongIndex];
    if (!song) return;
    document.getElementById('nowPlayingArt').src = song.albumArtUrl;
    document.getElementById('nowPlayingTitle').textContent = song.title;
    document.getElementById('nowPlayingArtist').textContent = song.artist;
    updateNowPlayingPlayBtn();
}

function updateNowPlayingPlayBtn() {
    const btn = document.getElementById('nowPlayingPlayPause');
    if (!btn) return;
    btn.innerHTML = isPlaying ? '<i class="fas fa-pause"></i>' : '<i class="fas fa-play"></i>';
}

function showNowPlayingBar() {
    nowPlayingBar.classList.remove('hidden');
    homePage.classList.add('has-now-playing');
}
function hideNowPlayingBar() {
    nowPlayingBar.classList.add('hidden');
    homePage.classList.remove('has-now-playing');
}

// Click bar info area → go to player
nowPlayingBar.addEventListener('click', (e) => {
    if (e.target.closest('.now-playing-controls')) return;
    showPlayerPage();
});

document.getElementById('nowPlayingPlayPause').addEventListener('click', (e) => {
    e.stopPropagation();
    if (isPlaying) pauseTrack(); else playTrack();
    updateNowPlayingPlayBtn();
});
document.getElementById('nowPlayingPrev').addEventListener('click', (e) => {
    e.stopPropagation();
    prevTrack();
});
document.getElementById('nowPlayingNext').addEventListener('click', (e) => {
    e.stopPropagation();
    nextTrackLogic();
});

// Now-playing bar progress is updated in main timeupdate listener above

// Show/hide bar based on page + playback state
function syncNowPlayingBar() {
    const onHome = homePage.classList.contains('active');
    if (onHome && songs[currentSongIndex]) {
        showNowPlayingBar();
        updateNowPlayingBar();
    } else {
        hideNowPlayingBar();
    }
}

// ── Splash Screen ──────────────────────────────────────────
function hideSplash() {
    const splash = document.getElementById('splashScreen');
    if (!splash) return;
    splash.classList.add('hiding');
    setTimeout(() => splash.classList.add('gone'), 650);
}
function setSplashStatus(msg) {
    const el = document.getElementById('splashStatus');
    if (el) el.textContent = msg;
}

// Network event listeners for toast
window.addEventListener('offline', () => showToast('⚠️ Koneksi internet hilang'));
window.addEventListener('online', () => showToast('✅ Koneksi internet kembali'));

// --- Initialization ---

// ── Bonus: Keyboard Shortcuts ──────────────────────────────
document.addEventListener('keydown', (e) => {
    // Don't intercept if typing in inputs
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    if (playerPage.classList.contains('active')) {
        if (e.code === 'Space') { e.preventDefault(); if (isPlaying) pauseTrack(); else playTrack(); }
        if (e.code === 'ArrowRight') { e.preventDefault(); nextTrackLogic(); }
        if (e.code === 'ArrowLeft') { e.preventDefault(); prevTrack(); }
        if (e.code === 'ArrowUp') { e.preventDefault(); audioPlayer.volume = Math.min(1, audioPlayer.volume + 0.1); playerVolumeSlider.value = audioPlayer.volume; showToast(`🔊 Volume: ${Math.round(audioPlayer.volume * 100)}%`); }
        if (e.code === 'ArrowDown') { e.preventDefault(); audioPlayer.volume = Math.max(0, audioPlayer.volume - 0.1); playerVolumeSlider.value = audioPlayer.volume; showToast(`🔉 Volume: ${Math.round(audioPlayer.volume * 100)}%`); }
        if (e.key === 'f' || e.key === 'F') { const s = songs[currentSongIndex]; if (s) toggleFavorite(s.id); }
    }
    if (e.key === 'Escape') { closeSidebar(); closeSearch(); closeSleepModal(); }
});

// shown briefly when player opens


// --- Hamburger Sidebar Logic ---
const hamburgerBtn = document.getElementById('hamburgerBtn');
const closeSidebarBtn = document.getElementById('closeSidebarBtn');
const sidebarMenu = document.getElementById('sidebarMenu');
const sidebarOverlay = document.getElementById('sidebarOverlay');
const toastNotif = document.getElementById('toastNotif');

function openSidebar() {
    sidebarMenu.classList.add('open');
    sidebarOverlay.classList.add('open');
    hamburgerBtn.classList.add('open');
    document.body.style.overflow = 'hidden';
}
function closeSidebar() {
    sidebarMenu.classList.remove('open');
    sidebarOverlay.classList.remove('open');
    hamburgerBtn.classList.remove('open');
    document.body.style.overflow = '';
    showMainSidebarPanel();
}

const PANELS = ['sidebarMainPanel','sidebarFavPanel','sidebarDownPanel',
    'sidebarRecentPanel','sidebarEqPanel','sidebarRequestPanel','sidebarSettingsPanel',
    'sidebarBugPanel','sidebarStatsPanel','sidebarProfilePanel'];

function showPanel(id) {
    PANELS.forEach(p => {
        const el = document.getElementById(p);
        if (el) el.classList.toggle('active-panel', p === id);
    });
}
function showMainSidebarPanel() { showPanel('sidebarMainPanel'); }

let toastQueue = null;
function showToast(message) {
    clearTimeout(toastQueue);
    toastNotif.textContent = message;
    toastNotif.classList.add('show');
    toastQueue = setTimeout(() => toastNotif.classList.remove('show'), 2600);
}

hamburgerBtn.addEventListener('click', openSidebar);
closeSidebarBtn.addEventListener('click', closeSidebar);
sidebarOverlay.addEventListener('click', closeSidebar);

document.getElementById('backFromFav').addEventListener('click', showMainSidebarPanel);
document.getElementById('backFromDown').addEventListener('click', showMainSidebarPanel);
document.getElementById('backFromRecent').addEventListener('click', showMainSidebarPanel);
document.getElementById('backFromEq').addEventListener('click', showMainSidebarPanel);
document.getElementById('backFromRequest').addEventListener('click', showMainSidebarPanel);
document.getElementById('backFromSettings').addEventListener('click', showMainSidebarPanel);

document.getElementById('navHome').addEventListener('click', () => { closeSidebar(); showHomePage(); });
document.getElementById('navFavorites').addEventListener('click', () => { showPanel('sidebarFavPanel'); renderFavoritesList(); });
document.getElementById('navDownload').addEventListener('click', () => { showPanel('sidebarDownPanel'); renderDownloadList(); });
document.getElementById('navRecent').addEventListener('click', () => { showPanel('sidebarRecentPanel'); renderRecentList(); });
document.getElementById('navEqualizer').addEventListener('click', () => { showPanel('sidebarEqPanel'); initEQ(); });
document.getElementById('navRequest').addEventListener('click', () => { showPanel('sidebarRequestPanel'); renderRequestHistory(); });
document.getElementById('navSettings').addEventListener('click', () => { showPanel('sidebarSettingsPanel'); initSettings(); });
document.getElementById('navAbout').addEventListener('click', () => { closeSidebar(); showToast('🎵 Zaymix v2.0 by @raull752 — life needs music'); });

// ── Search Feature ─────────────────────────────────────────
let searchQuery = '';
const navbarSearchBtn = document.getElementById('navbarSearchBtn');
const searchPanel = document.getElementById('searchPanel');
const searchInput = document.getElementById('searchInput');
const clearSearchBtn = document.getElementById('clearSearchBtn');

navbarSearchBtn.addEventListener('click', () => {
    const isVisible = searchPanel.classList.contains('visible');
    if (isVisible) {
        closeSearch();
    } else {
        searchPanel.classList.add('visible');
        navbarSearchBtn.classList.add('active-btn');
        searchInput.focus();
    }
});

function closeSearch() {
    searchPanel.classList.remove('visible');
    navbarSearchBtn.classList.remove('active-btn');
    searchQuery = ''; searchInput.value = '';
    clearSearchBtn.classList.add('hidden');
    document.getElementById('homeView').style.display = '';
    document.getElementById('searchView').style.display = 'none';
}

searchInput.addEventListener('input', () => {
    searchQuery = searchInput.value.trim().toLowerCase();
    clearSearchBtn.classList.toggle('hidden', !searchQuery);
    if (searchQuery) {
        document.getElementById('homeView').style.display = 'none';
        document.getElementById('searchView').style.display = '';
        renderSearchResults();
    } else {
        document.getElementById('homeView').style.display = '';
        document.getElementById('searchView').style.display = 'none';
    }
});

clearSearchBtn.addEventListener('click', () => {
    searchInput.value = ''; searchQuery = '';
    clearSearchBtn.classList.add('hidden');
    document.getElementById('homeView').style.display = '';
    document.getElementById('searchView').style.display = 'none';
    searchInput.focus();
});

function renderSearchResults() {
    const container = document.getElementById('searchResults');
    const label = document.getElementById('searchResultLabel');
    const filtered = songs.filter(s =>
        s.title.toLowerCase().includes(searchQuery) ||
        s.artist.toLowerCase().includes(searchQuery) ||
        (s.album && s.album.toLowerCase().includes(searchQuery))
    );
    label.textContent = filtered.length ? `Hasil untuk "${searchInput.value.trim()}"` : 'Tidak ditemukan';
    container.innerHTML = '';
    if (!filtered.length) {
        container.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:2rem;color:var(--text-muted)">
            <i class="fas fa-search" style="font-size:2rem;display:block;margin-bottom:0.5rem;opacity:0.35"></i>
            Lagu tidak ditemukan untuk "<strong>${searchInput.value.trim()}</strong>"
        </div>`;
        return;
    }
    filtered.forEach(song => {
        const idx = songs.indexOf(song);
        const fav = isFavorite(song.id);
        const card = document.createElement('div');
        card.className = 'song-card';
        card.setAttribute('data-id', song.id);
        card.innerHTML = `
            <div class="song-card-art-wrapper">
                <img src="${song.albumArtUrl}" alt="${song.title}" class="song-card-art">
                <div class="song-card-play-overlay"><i class="fas fa-play-circle"></i></div>
                <button class="song-card-fav-btn ${fav ? 'is-fav' : ''}" data-id="${song.id}">
                    <i class="${fav ? 'fas' : 'far'} fa-heart"></i>
                </button>
            </div>
            <div class="song-card-info">
                <h3 class="song-card-title">${song.title}</h3>
                <p class="song-card-artist">${song.artist}</p>
            </div>`;
        card.addEventListener('click', (e) => {
            if (e.target.closest('.song-card-fav-btn')) return;
            currentSongIndex = idx;
            loadSong(songs[idx]);
            playTrack();
            showPlayerPage();
        });
        card.querySelector('.song-card-fav-btn').addEventListener('click', (e) => {
            e.stopPropagation(); toggleFavorite(song.id);
        });
        container.appendChild(card);
    });
}

// ── Favorites Feature ──────────────────────────────────────

function isFavorite(songId) { return favorites.includes(songId); }
function toggleFavorite(songId) {
    if (isFavorite(songId)) {
        favorites = favorites.filter(id => id !== songId);
        showToast('💔 Dihapus dari Favorites');
    } else {
        favorites.push(songId);
        showToast('❤️ Ditambahkan ke Favorites');
    }
    saveFavorites(); updateFavBadge(); updatePlayerFavBtn();
    document.querySelectorAll('.song-card-fav-btn').forEach(btn => {
        const id = parseInt(btn.getAttribute('data-id'));
        const fav = isFavorite(id);
        btn.classList.toggle('is-fav', fav);
        btn.querySelector('i').className = fav ? 'fas fa-heart' : 'far fa-heart';
    });
}
function updateFavBadge() {
    const badge = document.getElementById('favoritesBadge');
    badge.textContent = favorites.length;
    badge.style.display = favorites.length > 0 ? '' : 'none';
}
function updatePlayerFavBtn() {
    const btn = document.getElementById('playerFavoriteBtn');
    if (!btn) return;
    const song = songs[currentSongIndex];
    if (!song) return;
    const fav = isFavorite(song.id);
    btn.classList.toggle('is-fav', fav);
    btn.querySelector('i').className = fav ? 'fas fa-heart' : 'far fa-heart';
}
document.getElementById('playerFavoriteBtn').addEventListener('click', () => {
    const song = songs[currentSongIndex];
    if (song) toggleFavorite(song.id);
});
function renderFavoritesList() {
    const container = document.getElementById('favoritesList');
    const favSongs = songs.filter(s => isFavorite(s.id));
    if (!favSongs.length) {
        container.innerHTML = `<div class="sublist-empty"><i class="far fa-heart"></i>Belum ada lagu favorit.<br>Klik ❤️ pada lagu untuk menambahkan.</div>`;
        return;
    }
    container.innerHTML = '';
    favSongs.forEach(song => {
        const idx = songs.indexOf(song);
        const item = document.createElement('div');
        item.className = 'sublist-song-item';
        item.innerHTML = `<img src="${song.albumArtUrl}" alt="" class="sublist-song-img">
            <div class="sublist-song-info"><div class="sublist-song-title">${song.title}</div><div class="sublist-song-artist">${song.artist}</div></div>`;
        item.addEventListener('click', () => { closeSidebar(); currentSongIndex = idx; loadSong(songs[idx]); playTrack(); showPlayerPage(); });
        container.appendChild(item);
    });
}

// ── Recently Played Feature ────────────────────────────────

function addToRecent(song) {
    recentlyPlayed = recentlyPlayed.filter(r => r.id !== song.id);
    recentlyPlayed.unshift({ id: song.id, title: song.title, artist: song.artist, albumArtUrl: song.albumArtUrl, playedAt: Date.now() });
    if (recentlyPlayed.length > 30) recentlyPlayed = recentlyPlayed.slice(0, 30);
    saveRecent();
}
function timeAgo(ts) {
    const diff = (Date.now() - ts) / 1000;
    if (diff < 60) return 'Baru saja';
    if (diff < 3600) return Math.floor(diff/60) + ' menit lalu';
    if (diff < 86400) return Math.floor(diff/3600) + ' jam lalu';
    return Math.floor(diff/86400) + ' hari lalu';
}
function renderRecentList() {
    const container = document.getElementById('recentList');
    if (!recentlyPlayed.length) {
        container.innerHTML = `<div class="sublist-empty"><i class="fas fa-clock-rotate-left"></i>Belum ada riwayat.<br>Mulai putar lagu!</div>`;
        return;
    }
    container.innerHTML = '';
    recentlyPlayed.forEach(entry => {
        const songObj = songs.find(s => s.id === entry.id);
        const idx = songObj ? songs.indexOf(songObj) : -1;
        const item = document.createElement('div');
        item.className = 'sublist-song-item';
        item.innerHTML = `<img src="${entry.albumArtUrl}" alt="" class="sublist-song-img">
            <div class="sublist-song-info"><div class="sublist-song-title">${entry.title}</div><div class="sublist-song-artist">${entry.artist}</div></div>
            <span class="recent-time-badge">${timeAgo(entry.playedAt)}</span>`;
        if (idx >= 0) {
            item.addEventListener('click', () => { closeSidebar(); currentSongIndex = idx; loadSong(songs[idx]); playTrack(); showPlayerPage(); });
        }
        container.appendChild(item);
    });
}

// ── Download Feature ───────────────────────────────────────

function isDownloaded(songId) { return downloadedSongs.includes(songId); }
function downloadSong(song, force = false) {
    if (!song || !song.audioSrc) { showToast('⚠️ File audio tidak tersedia'); return; }
    const a = document.createElement('a');
    a.href = song.audioSrc;
    a.download = `${song.title} - ${song.artist}.mp3`;
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    if (!isDownloaded(song.id)) { downloadedSongs.push(song.id); saveDownloads(); updateDownloadBadge(); }
    showToast(`⬇️ Mengunduh: ${song.title}`);
    const dlBtn = document.getElementById('playerDownloadBtn');
    if (dlBtn) dlBtn.classList.add('active');
}

// ── Confirm Toast ───────────────────────────────────────────
let confirmToastTimeout = null;
function showConfirmToast(message, onConfirm) {
    clearTimeout(confirmToastTimeout);
    const el = document.getElementById('toastNotif');
    el.innerHTML = `<span>${message}</span>
        <button id="toastConfirmYes" style="margin-left:0.8rem;background:var(--accent);border:none;color:#fff;padding:3px 12px;border-radius:6px;cursor:pointer;font-size:0.8rem;font-weight:700">Ya</button>
        <button id="toastConfirmNo" style="margin-left:0.4rem;background:rgba(255,255,255,0.12);border:none;color:#fff;padding:3px 10px;border-radius:6px;cursor:pointer;font-size:0.8rem">Tidak</button>`;
    el.classList.add('show');
    el.style.borderRadius = '14px';
    el.style.whiteSpace = 'normal';
    el.style.maxWidth = '90vw';
    el.style.textAlign = 'center';
    document.getElementById('toastConfirmYes').onclick = () => { hideConfirmToast(); onConfirm(); };
    document.getElementById('toastConfirmNo').onclick = () => hideConfirmToast();
    confirmToastTimeout = setTimeout(hideConfirmToast, 6000);
}
function hideConfirmToast() {
    clearTimeout(confirmToastTimeout);
    const el = document.getElementById('toastNotif');
    el.classList.remove('show');
    setTimeout(() => {
        el.innerHTML = '';
        el.style.borderRadius = '';
        el.style.whiteSpace = '';
        el.style.maxWidth = '';
        el.style.textAlign = '';
    }, 350);
}
function updateDownloadBadge() {
    const badge = document.getElementById('downloadBadge');
    badge.textContent = downloadedSongs.length;
    badge.style.display = downloadedSongs.length > 0 ? '' : 'none';
}
function renderDownloadList() {
    const container = document.getElementById('downloadList');
    const dlSongs = songs.filter(s => isDownloaded(s.id));
    if (!dlSongs.length) {
        container.innerHTML = `<div class="sublist-empty"><i class="fas fa-download"></i>Belum ada lagu diunduh.<br>Klik ⬇️ di player untuk mengunduh.</div>`;
        return;
    }
    container.innerHTML = '';
    dlSongs.forEach(song => {
        const idx = songs.indexOf(song);
        const item = document.createElement('div');
        item.className = 'sublist-song-item';
        item.innerHTML = `<img src="${song.albumArtUrl}" alt="" class="sublist-song-img">
            <div class="sublist-song-info"><div class="sublist-song-title">${song.title}</div><div class="sublist-song-artist">${song.artist}</div></div>
            <button class="sublist-dl-btn" title="Unduh ulang"><i class="fas fa-download"></i></button>`;
        item.querySelector('.sublist-song-info').addEventListener('click', () => { closeSidebar(); currentSongIndex = idx; loadSong(songs[idx]); playTrack(); showPlayerPage(); });
        item.querySelector('.sublist-song-img').addEventListener('click', () => { closeSidebar(); currentSongIndex = idx; loadSong(songs[idx]); playTrack(); showPlayerPage(); });
        item.querySelector('.sublist-dl-btn').addEventListener('click', (e) => { e.stopPropagation(); downloadSong(song); });
        container.appendChild(item);
    });
}
document.getElementById('playerDownloadBtn').addEventListener('click', () => {
    const song = songs[currentSongIndex];
    if (!song) return;
    if (isDownloaded(song.id)) {
        // Show confirm toast for duplicate
        showConfirmToast(
            `"${song.title}" sudah pernah diunduh. Unduh ulang?`,
            () => downloadSong(song, true)
        );
    } else {
        downloadSong(song);
    }
});
function updateDownloadBtn() {
    const btn = document.getElementById('playerDownloadBtn');
    if (!btn) return;
    const song = songs[currentSongIndex];
    btn.classList.toggle('active', song ? isDownloaded(song.id) : false);
}

// ── Equalizer Feature ──────────────────────────────────────
const EQ_BANDS = [
    { freq: '60Hz', gain: 0 }, { freq: '170Hz', gain: 0 }, { freq: '350Hz', gain: 0 },
    { freq: '1kHz', gain: 0 }, { freq: '3.5kHz', gain: 0 }, { freq: '10kHz', gain: 0 }
];
const EQ_PRESETS = {
    flat:       [0, 0, 0, 0, 0, 0],
    bass:       [8, 6, 3, 0, 0, 0],
    pop:        [-1, 2, 5, 5, 2, -1],
    rock:       [5, 3, -1, -1, 3, 5],
    jazz:       [4, 3, 1, 2, 3, 4],
    electronic: [6, 4, 0, 3, 2, 5]
};
let audioCtx = null, analyserNode = null, sourceNode = null;
let eqFilters = [];
let masterGainNode = null;
let eqInited = false;

function setupAudioContext() {
    if (eqInited) return;
    try {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        sourceNode = audioCtx.createMediaElementSource(audioPlayer);
        masterGainNode = audioCtx.createGain();
        analyserNode = audioCtx.createAnalyser();
        analyserNode.fftSize = 256;
        eqFilters = EQ_BANDS.map((band, i) => {
            const filter = audioCtx.createBiquadFilter();
            filter.type = (i === 0) ? 'lowshelf' : (i === EQ_BANDS.length - 1) ? 'highshelf' : 'peaking';
            filter.frequency.value = parseFloat(band.freq);
            filter.gain.value = 0;
            return filter;
        });
        let node = sourceNode;
        eqFilters.forEach(f => { node.connect(f); node = f; });
        node.connect(analyserNode);
        analyserNode.connect(masterGainNode);
        masterGainNode.connect(audioCtx.destination);
        eqInited = true;
    } catch(e) { console.warn('AudioContext setup failed:', e); }
}

function initEQ() {
    setupAudioContext();
    const wrap = document.getElementById('eqSlidersWrap');
    if (wrap && wrap.children.length === 0) {
        EQ_BANDS.forEach((band, i) => {
            const div = document.createElement('div');
            div.className = 'eq-band';
            div.innerHTML = `<span class="eq-band-val" id="eqVal${i}">0dB</span>
                <input type="range" class="eq-slider" id="eqSlider${i}" min="-12" max="12" step="1" value="0">
                <span class="eq-band-label">${band.freq}</span>`;
            wrap.appendChild(div);
            div.querySelector(`#eqSlider${i}`).addEventListener('input', (e) => {
                const gain = parseInt(e.target.value);
                EQ_BANDS[i].gain = gain;
                document.getElementById(`eqVal${i}`).textContent = (gain >= 0 ? '+' : '') + gain + 'dB';
                if (eqFilters[i]) eqFilters[i].gain.value = gain;
                document.querySelectorAll('.eq-preset').forEach(b => b.classList.remove('active-preset'));
            });
        });
    }
    // Master gain
    document.getElementById('eqMasterGain').addEventListener('input', (e) => {
        const val = parseInt(e.target.value);
        document.getElementById('eqMasterVal').textContent = (val >= 0 ? '+' : '') + val + ' dB';
        if (masterGainNode) masterGainNode.gain.value = Math.pow(10, val / 20);
    });
    // Presets
    document.querySelectorAll('.eq-preset').forEach(btn => {
        btn.addEventListener('click', () => {
            const preset = EQ_PRESETS[btn.dataset.preset];
            if (!preset) return;
            document.querySelectorAll('.eq-preset').forEach(b => b.classList.remove('active-preset'));
            btn.classList.add('active-preset');
            preset.forEach((gain, i) => {
                const slider = document.getElementById(`eqSlider${i}`);
                const valEl = document.getElementById(`eqVal${i}`);
                if (slider) { slider.value = gain; }
                if (valEl) { valEl.textContent = (gain >= 0 ? '+' : '') + gain + 'dB'; }
                EQ_BANDS[i].gain = gain;
                if (eqFilters[i]) eqFilters[i].gain.value = gain;
            });
            showToast(`🎚️ Preset: ${btn.textContent}`);
        });
    });
}

// ── Background Changer Feature ─────────────────────────────
const BG_GRADIENTS = [
    { label: 'Deep Purple', value: 'linear-gradient(135deg,#0d0014,#2e0050)' },
    { label: 'Midnight Blue', value: 'linear-gradient(135deg,#000428,#004e92)' },
    { label: 'Crimson Dusk', value: 'linear-gradient(135deg,#1a0000,#4a0000)' },
    { label: 'Forest Night', value: 'linear-gradient(135deg,#001a00,#003300)' },
    { label: 'Ocean Deep', value: 'linear-gradient(135deg,#000d1a,#001f3f)' },
    { label: 'Aurora', value: 'linear-gradient(135deg,#001a12,#0a2a3a,#1a004a)' },
    { label: 'Rose Noir', value: 'linear-gradient(135deg,#1a0010,#3a0030)' },
    { label: 'Golden Hour', value: 'linear-gradient(135deg,#1a0d00,#3d1c00)' },
    { label: 'Silver Fox', value: 'linear-gradient(135deg,#0d0d0d,#2a2a2a)' },
    { label: 'Neon Grid', value: 'linear-gradient(135deg,#000a1a,#001a33,#000a1a)' },
];
const BG_SOLIDS = [
    '#0d0014','#000000','#0a0a1a','#001a0a','#1a0005','#080808',
    '#0d1117','#12001a','#001a1a','#1a1000',
];

let currentBg = localStorage.getItem('zaymix_bg') || '';
let activeBgSwatch = null;

function applyBackground(value, swatchEl) {
    if (value.startsWith('url(') || value.startsWith('linear-gradient')) {
        document.body.style.backgroundImage = value;
        document.body.style.backgroundColor = '';
    } else {
        document.body.style.backgroundColor = value;
        document.body.style.backgroundImage = 'none';
    }
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    localStorage.setItem('zaymix_bg', value);
    currentBg = value;
    // Update active swatch
    document.querySelectorAll('.bg-swatch').forEach(s => s.classList.remove('active-swatch'));
    if (swatchEl) swatchEl.classList.add('active-swatch');
}

function buildBgPanel() {
    const swatchesEl = document.getElementById('bgSwatches');
    const solidsEl = document.getElementById('bgSolids');
    if (!swatchesEl || !solidsEl) return;
    swatchesEl.innerHTML = '';
    solidsEl.innerHTML = '';
    BG_GRADIENTS.forEach(bg => {
        const s = document.createElement('button');
        s.className = 'bg-swatch';
        s.title = bg.label;
        s.style.background = bg.value;
        if (currentBg === bg.value) s.classList.add('active-swatch');
        s.addEventListener('click', () => applyBackground(bg.value, s));
        swatchesEl.appendChild(s);
    });
    BG_SOLIDS.forEach(color => {
        const s = document.createElement('button');
        s.className = 'bg-swatch';
        s.title = color;
        s.style.background = color;
        s.style.border = '2px solid rgba(255,255,255,0.1)';
        if (currentBg === color) s.classList.add('active-swatch');
        s.addEventListener('click', () => applyBackground(color, s));
        solidsEl.appendChild(s);
    });
}





document.getElementById('bgChangerBtn')?.addEventListener('click', () => {
    const open = bgChangerPanel.classList.contains('visible');
    if (open) {
        bgChangerPanel.classList.remove('visible');
        document.getElementById('bgChangerBtn').classList.remove('active-btn');
    } else {
        bgChangerPanel.classList.add('visible');
        document.getElementById('bgChangerBtn').classList.add('active-btn');
        buildBgPanel();
    }
});
document.getElementById('closeBgPanel')?.addEventListener('click', () => {
    bgChangerPanel.classList.remove('visible');
    document.getElementById('bgChangerBtn').classList.remove('active-btn');
});
document.getElementById('applyCustomBg').addEventListener('click', () => {
    const c1 = document.getElementById('bgColor1').value;
    const c2 = document.getElementById('bgColor2').value;
    applyBackground(`linear-gradient(135deg,${c1},${c2})`, null);
    showToast('🎨 Background diterapkan!');
});
document.getElementById('bgImageUpload').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
        // Hide custom video bg if any
        removeCustomBgVideo();
        applyBackground(`url(${ev.target.result})`, null);
        showToast('🖼️ Background gambar diterapkan!');
        bgChangerPanel.classList.remove('visible');
        document.getElementById('bgChangerBtn').classList.remove('active-btn');
    };
    reader.readAsDataURL(file);
    e.target.value = '';
});

// ── Video Background Feature ───────────────────────────────
let customBgVideoURL = null;

function removeCustomBgVideo() {
    const container = document.getElementById('customBgVideoContainer');
    const video = document.getElementById('customBgVideo');
    const previewWrap = document.getElementById('bgVideoPreviewWrap');
    if (video) { video.pause(); video.src = ''; }
    if (container) container.classList.add('hidden');
    if (previewWrap) previewWrap.classList.add('hidden');
    if (customBgVideoURL) { URL.revokeObjectURL(customBgVideoURL); customBgVideoURL = null; }
    localStorage.removeItem('zaymix_bg_video_name');
}

document.getElementById('bgVideoUpload').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;
    // Revoke old blob
    if (customBgVideoURL) URL.revokeObjectURL(customBgVideoURL);
    customBgVideoURL = URL.createObjectURL(file);

    const container = document.getElementById('customBgVideoContainer');
    const bgVid = document.getElementById('customBgVideo');
    const preview = document.getElementById('bgVideoPreview');
    const previewWrap = document.getElementById('bgVideoPreviewWrap');
    const nameEl = document.getElementById('bgVideoName');

    // Set body bg video
    bgVid.src = customBgVideoURL;
    bgVid.play().catch(() => {});
    container.classList.remove('hidden');

    // Preview in panel
    preview.src = customBgVideoURL;
    preview.play().catch(() => {});
    previewWrap.classList.remove('hidden');
    nameEl.textContent = file.name;

    // Clear image bg
    document.body.style.backgroundImage = 'none';
    localStorage.removeItem('zaymix_bg');

    showToast('🎬 Video background aktif!');
    e.target.value = '';
});

document.getElementById('removeBgVideo').addEventListener('click', () => {
    removeCustomBgVideo();
    showToast('🗑️ Video background dihapus');
});

// Override resetBg to also clear video
document.getElementById('resetBg').removeEventListener('click', null);
document.getElementById('resetBg').onclick = () => {
    removeCustomBgVideo();
    document.body.style.backgroundImage = 'none';
    document.body.style.backgroundColor = '';
    localStorage.removeItem('zaymix_bg');
    currentBg = '';
    document.querySelectorAll('.bg-swatch').forEach(s => s.classList.remove('active-swatch'));
    showToast('🔄 Background direset');
};
document.getElementById('resetBg').addEventListener('click', () => {
    document.body.style.backgroundImage = 'none';
    document.body.style.backgroundColor = 'var(--bg-deep, #0d0014)';
    localStorage.removeItem('zaymix_bg');
    currentBg = '';
    document.querySelectorAll('.bg-swatch').forEach(s => s.classList.remove('active-swatch'));
    showToast('🔄 Background direset');
});
// Restore saved bg on load
if (currentBg) applyBackground(currentBg, null);

// ── Request Lagu Feature ───────────────────────────────────
function saveRequests() { localStorage.setItem('zaymix_requests', JSON.stringify(songRequests)); }

function renderRequestHistory() {
    const container = document.getElementById('requestHistory');
    if (!songRequests.length) { container.innerHTML = ''; return; }
    container.innerHTML = `<div class="req-history-title"><i class="fas fa-history"></i> Request Sebelumnya</div>`;
    songRequests.slice().reverse().forEach(req => {
        const item = document.createElement('div');
        item.className = 'req-history-item';
        item.innerHTML = `<div class="req-item-info">
            <div class="req-item-title">${req.title}</div>
            <div class="req-item-artist">${req.artist}${req.genre ? ' · ' + req.genre : ''}</div>
        </div>
        <span class="req-item-time">${timeAgo(req.sentAt)}</span>`;
        container.appendChild(item);
    });
}

document.getElementById('submitRequestBtn').addEventListener('click', async () => {
    const title = document.getElementById('reqTitle').value.trim();
    const artist = document.getElementById('reqArtist').value.trim();
    const genre = document.getElementById('reqGenre').value;
    const link = document.getElementById('reqLink').value.trim();
    const note = document.getElementById('reqNote').value.trim();

    if (!title || !artist) { showToast('⚠️ Judul dan artis wajib diisi!'); return; }

    const btn = document.getElementById('submitRequestBtn');
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Mengirim...';

    try {
        const res = await fetch('https://formspree.io/f/mgvlwopd', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
            body: JSON.stringify({
                'Judul Lagu': title,
                'Artis': artist,
                'Genre': genre || '—',
                'Link': link || '—',
                'Pesan': note || '—',
            })
        });
        if (res.ok) {
            // Save to local history too
            songRequests.push({ title, artist, genre, link, note, sentAt: Date.now() });
            saveRequests();
            // Show success
            document.getElementById('requestFormWrap').style.display = 'none';
            document.getElementById('requestSuccess').classList.remove('hidden');
            renderRequestHistory();
        } else {
            showToast('❌ Gagal mengirim, coba lagi.');
        }
    } catch (e) {
        showToast('❌ Tidak ada koneksi internet.');
    } finally {
        btn.disabled = false;
        btn.innerHTML = '<i class="fas fa-paper-plane"></i> Kirim Request';
    }
});

document.getElementById('reqSendAnother').addEventListener('click', () => {
    document.getElementById('reqTitle').value = '';
    document.getElementById('reqArtist').value = '';
    document.getElementById('reqGenre').value = '';
    document.getElementById('reqLink').value = '';
    document.getElementById('reqNote').value = '';
    document.getElementById('requestSuccess').classList.add('hidden');
    document.getElementById('requestFormWrap').style.display = '';
});

// ── Settings Feature ───────────────────────────────────────
function getSetting(key) {
    return key in appSettings ? appSettings[key] : defaultSettings[key];
}
function setSetting(key, val) {
    appSettings[key] = val;
    localStorage.setItem('zaymix_settings', JSON.stringify(appSettings));
    applyCardSize(getSetting('cardSize'));
}

function applyCardSize(size) {
    const grid = document.getElementById('songList');
    if (grid) {
        if (size === 'compact') grid.style.gridTemplateColumns = 'repeat(auto-fill,minmax(120px,1fr))';
        else if (size === 'large') grid.style.gridTemplateColumns = 'repeat(auto-fill,minmax(190px,1fr))';
        else grid.style.gridTemplateColumns = '';
    }
    // Also scale mini cards in horizontal rows
    const miniWidth = size === 'compact' ? '110px' : size === 'large' ? '160px' : '130px';
    document.querySelectorAll('.mini-card').forEach(c => c.style.width = miniWidth);
    // Store size for future mini cards rendered after this call
    document._miniCardWidth = miniWidth;
}

function initSettings() {
    document.getElementById('settingDarkMode').checked = getSetting('darkMode');
    document.getElementById('settingCardSize').value = getSetting('cardSize');
    document.getElementById('settingAutoplay').checked = getSetting('autoplay');
    document.getElementById('settingCrossfade').checked = getSetting('crossfade');
    document.getElementById('crossfadeDuration').value = getSetting('crossfadeDuration');
    document.getElementById('crossfadeVal').textContent = getSetting('crossfadeDuration') + 's';
    document.getElementById('settingNormalize').checked = getSetting('normalize');
    const rowEl = document.getElementById('crossfadeDurationRow');
    rowEl.classList.toggle('hidden-row', !getSetting('crossfade'));
}

document.getElementById('settingDarkMode').addEventListener('change', (e) => setSetting('darkMode', e.target.checked));
document.getElementById('settingCardSize').addEventListener('change', (e) => setSetting('cardSize', e.target.value));
document.getElementById('settingAutoplay').addEventListener('change', (e) => setSetting('autoplay', e.target.checked));
document.getElementById('settingCrossfade').addEventListener('change', (e) => {
    setSetting('crossfade', e.target.checked);
    document.getElementById('crossfadeDurationRow').classList.toggle('hidden-row', !e.target.checked);
});
document.getElementById('crossfadeDuration').addEventListener('input', (e) => {
    document.getElementById('crossfadeVal').textContent = e.target.value + 's';
    setSetting('crossfadeDuration', parseInt(e.target.value));
});
document.getElementById('settingNormalize').addEventListener('change', (e) => setSetting('normalize', e.target.checked));
// Apply saved card size on init
applyCardSize(getSetting('cardSize'));

// ── Sleep Timer Feature ────────────────────────────────────
let sleepTimerTimeout = null;
let sleepTimerInterval = null;
let sleepTimerEndTime = null;
let sleepTimerTotalMs = 0;
const sleepTimerModal = document.getElementById('sleepTimerModal');
const sleepTimerOptions = document.getElementById('sleepTimerOptions');
const sleepTimerStatus = document.getElementById('sleepTimerStatus');
const sleepTimerCountdown = document.getElementById('sleepTimerCountdown');
const sleepBarCountdown = document.getElementById('sleepBarCountdown');
const sleepTimerBar = document.getElementById('sleepTimerBar');
const sleepRingArc = document.getElementById('sleepRingArc');
const RING_CIRCUMFERENCE = 163.4;

function openSleepModal() {
    sleepTimerModal.classList.remove('hidden');
    const hasActive = sleepTimerTimeout || sleepTimerEndTime === -1;
    sleepTimerOptions.style.display = hasActive ? 'none' : '';
    sleepTimerStatus.classList.toggle('hidden', !hasActive);
}
function closeSleepModal() { sleepTimerModal.classList.add('hidden'); }
function setSleepTimer(minutes) {
    clearSleepTimer();
    sleepTimerOptions.style.display = 'none';
    sleepTimerStatus.classList.remove('hidden');
    if (minutes === -1) {
        sleepTimerEndTime = -1;
        sleepTimerCountdown.textContent = 'Akhir lagu';
        sleepBarCountdown.textContent = 'Akhir lagu';
        showSleepTimerBar();
        document.getElementById('playerSleepTimerBtn').classList.add('active');
        showToast('🌙 Timer: Akhir lagu ini');
    } else {
        const ms = minutes * 60 * 1000;
        sleepTimerTotalMs = ms;
        sleepTimerEndTime = Date.now() + ms;
        sleepTimerTimeout = setTimeout(() => { pauseTrack(); showToast('😴 Waktu habis – musik dijeda'); clearSleepTimer(); }, ms);
        sleepTimerInterval = setInterval(updateSleepTimerDisplay, 1000);
        updateSleepTimerDisplay();
        showSleepTimerBar();
        document.getElementById('playerSleepTimerBtn').classList.add('active');
        showToast(`🌙 Timer diset: ${minutes} menit`);
    }
}
function clearSleepTimer() {
    clearTimeout(sleepTimerTimeout); clearInterval(sleepTimerInterval);
    sleepTimerTimeout = null; sleepTimerInterval = null; sleepTimerEndTime = null; sleepTimerTotalMs = 0;
    // Hide bar with display:none override
    const bar = document.getElementById('sleepTimerBar');
    if (bar) { bar.style.display = 'none'; bar.classList.add('hidden'); }
    const btn = document.getElementById('playerSleepTimerBtn');
    if (btn) btn.classList.remove('active');
    sleepTimerOptions.style.display = ''; sleepTimerStatus.classList.add('hidden');
    if (sleepRingArc) sleepRingArc.style.strokeDashoffset = 0;
}

function showSleepTimerBar() {
    const bar = document.getElementById('sleepTimerBar');
    if (bar) { bar.style.display = ''; bar.classList.remove('hidden'); }
}
function updateSleepTimerDisplay() {
    if (!sleepTimerEndTime || sleepTimerEndTime === -1) return;
    const remaining = Math.max(0, sleepTimerEndTime - Date.now());
    const mins = Math.floor(remaining / 60000);
    const secs = Math.floor((remaining % 60000) / 1000);
    const fmt = `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    sleepTimerCountdown.textContent = fmt;
    sleepBarCountdown.textContent = fmt;
    if (sleepRingArc) sleepRingArc.style.strokeDashoffset = RING_CIRCUMFERENCE * (1 - remaining / sleepTimerTotalMs);
    if (remaining <= 0) clearSleepTimer();
}
document.getElementById('playerSleepTimerBtn').addEventListener('click', openSleepModal);
document.getElementById('closeSleepModal').addEventListener('click', closeSleepModal);
sleepTimerModal.addEventListener('click', (e) => { if (e.target === sleepTimerModal) closeSleepModal(); });
document.querySelectorAll('.sleep-opt').forEach(btn => {
    btn.addEventListener('click', () => { setSleepTimer(parseInt(btn.getAttribute('data-minutes'))); closeSleepModal(); });
});
document.getElementById('cancelSleepTimer').addEventListener('click', () => { clearSleepTimer(); closeSleepModal(); showToast('⏹️ Timer dibatalkan'); });
// cancelSleepBar is wired at bottom of file with capture listener

audioPlayer.addEventListener('ended', () => {
    if (sleepTimerEndTime === -1) { pauseTrack(); showToast('😴 Akhir lagu – musik dijeda'); clearSleepTimer(); return; }
    if (repeatMode !== 1) nextTrack();
});

// ── Hide/Show Lyrics Toggle ────────────────────────────────
let lyricsVisible = true;
document.getElementById('playerHideLyricsBtn').addEventListener('click', () => {
    lyricsVisible = !lyricsVisible;
    const container = document.getElementById('lyricsContainer');
    const btn = document.getElementById('playerHideLyricsBtn');
    container.classList.toggle('lyrics-hidden', !lyricsVisible);
    const icon = btn.querySelector('i');
    icon.className = lyricsVisible ? 'fas fa-eye' : 'fas fa-eye-slash';
    btn.title = lyricsVisible ? 'Sembunyikan lirik' : 'Tampilkan lirik';
    btn.classList.toggle('active', !lyricsVisible);
    showToast(lyricsVisible ? '👁️ Lirik ditampilkan' : '🙈 Lirik disembunyikan');
});

// ── Sleep Timer Bar Cancel — definitive fix ────────────────
document.getElementById('cancelSleepBar').onclick = function(e) {
    e.preventDefault();
    e.stopPropagation();
    clearSleepTimer();
    showToast('⏹️ Timer tidur dibatalkan');
};
// ══════════════════════════════════════════════════════════
// SIDEBAR NAV — add new items
// ══════════════════════════════════════════════════════════
// navKaraoke removed per user request
// navVisualizer removed per user request
if (document.getElementById('navBgChanger'))
    document.getElementById('navBgChanger').addEventListener('click', () => {
        closeSidebar();
        const panel = document.getElementById('bgChangerPanel');
        if (panel) { panel.classList.toggle('visible'); }
    });

// ══════════════════════════════════════════════════════════
// PER-USER DATA SYNC
// ══════════════════════════════════════════════════════════
function userKey(key) { return currentUser ? `zaymix_${currentUser.username}_${key}` : `zaymix_guest_${key}`; }
function getUserData(key) { try { return JSON.parse(localStorage.getItem(userKey(key))); } catch { return null; } }
function setUserData(key, value) { localStorage.setItem(userKey(key), JSON.stringify(value)); }

function syncUserData() {
    if (!currentUser) return;
    const uf = getUserData('favorites'); if (uf !== null) favorites = uf;
    const ud = getUserData('downloads'); if (ud !== null) downloadedSongs = ud;
    const us = getUserData('stats'); if (us !== null) listenStats = us;
    const ur = getUserData('recent'); if (ur !== null) recentlyPlayed = ur;
}
function saveUserSnapshot() {
    if (!currentUser) return;
    setUserData('favorites', favorites); setUserData('downloads', downloadedSongs);
    setUserData('stats', listenStats); setUserData('recent', recentlyPlayed);
    setUserData('lastSongIndex', currentSongIndex);
    setUserData('lastSongTime', Math.floor(audioPlayer.currentTime));
}
setInterval(() => { if (currentUser && isPlaying) saveUserSnapshot(); }, 10000);
window.addEventListener('beforeunload', () => { if (currentUser) saveUserSnapshot(); });

// Track play only when logged in
function trackPlay(songId) {
    if (!currentUser) return;
    if (!listenStats[songId]) listenStats[songId] = { plays: 0, totalSeconds: 0 };
    listenStats[songId].plays++; saveStats();
}

// Per-user save overrides
function saveFavorites() { localStorage.setItem('zaymix_favorites', JSON.stringify(favorites)); if (currentUser) setUserData('favorites', favorites); }
function saveDownloads() { localStorage.setItem('zaymix_downloads', JSON.stringify(downloadedSongs)); if (currentUser) setUserData('downloads', downloadedSongs); }
function saveStats() { localStorage.setItem('zaymix_stats', JSON.stringify(listenStats)); if (currentUser) setUserData('stats', listenStats); }
function saveRecent() { localStorage.setItem('zaymix_recent', JSON.stringify(recentlyPlayed)); if (currentUser) setUserData('recent', recentlyPlayed); }

// ══════════════════════════════════════════════════════════
// RESUME PLAYBACK TOAST
// ══════════════════════════════════════════════════════════
function showResumeToast(song, savedTime) {
    const toast = document.getElementById('resumeToast'); if (!toast) return;
    document.getElementById('resumeToastArt').src = song.albumArtUrl;
    document.getElementById('resumeToastTitle').textContent = song.title;
    toast.classList.add('show');
    document.getElementById('resumeToastBtn').onclick = () => {
        audioPlayer.currentTime = savedTime; playTrack(); showPlayerPage(); toast.classList.remove('show');
    };
    document.getElementById('resumeToastDismiss').onclick = () => toast.classList.remove('show');
    setTimeout(() => toast.classList.remove('show'), 10000);
}

// ══════════════════════════════════════════════════════════
// DEFINITIVE renderProfilePanel — photo + border + logout
// ══════════════════════════════════════════════════════════
function renderProfilePanel() {
    const container = document.getElementById('profilePanelContent');
    if (!container) return;
    if (!currentUser) {
        container.innerHTML = `
        <div style="padding:1.5rem;text-align:center">
            <i class="fas fa-user-circle" style="font-size:3rem;color:var(--text-muted);opacity:0.3;display:block;margin-bottom:1rem"></i>
            <div style="font-family:'Syne',sans-serif;font-weight:700;font-size:1rem;color:var(--text-primary);margin-bottom:0.5rem">Belum Login</div>
            <div style="font-size:0.82rem;color:var(--text-muted);margin-bottom:1.2rem">Login untuk mengakses pengaturan akun, statistik, dan sinkronisasi data.</div>
            <button onclick="closeSidebar();openLoginModal()" style="background:linear-gradient(135deg,#7c3aed,var(--accent));border:none;color:#fff;font-family:'Syne',sans-serif;font-size:0.88rem;font-weight:700;padding:0.7rem 2rem;border-radius:12px;cursor:pointer;width:100%">
                <i class="fas fa-sign-in-alt"></i> Login / Daftar
            </button>
        </div>`;
        return;
    }
    const totalPlays = Object.values(listenStats).reduce((s, v) => s + (v.plays||0), 0);
    const totalMins  = Math.floor(Object.values(listenStats).reduce((s, v) => s + (v.totalSeconds||0), 0) / 60);
    const joinDate   = new Date(currentUser.joinDate).toLocaleDateString('id-ID', { day:'numeric', month:'long', year:'numeric' });
    const borderStyle = currentUser.borderStyle || 'ring-pulse';
    const borderColor = currentUser.borderColor || '#b76cff';
    const bio = currentUser.bio || '';
    const avatarColors = ['#7c3aed','#ec4899','#06b6d4','#10b981','#f59e0b','#f87171','#a855f7','#0ea5e9'];
    const borderOptions = [
        {id:'ring-pulse',label:'Pulse'},{id:'ring-solid',label:'Solid'},
        {id:'ring-glow',label:'Glow'},{id:'ring-rainbow',label:'Rainbow'},
        {id:'border-none',label:'Off'}
    ];
    const avatarHtml = currentUser.profilePic
        ? `<img src="${currentUser.profilePic}" class="acct-avatar-img" alt="" style="width:80px;height:80px;border-radius:50%;object-fit:cover">`
        : `<div class="acct-avatar-circle" style="background:${currentUser.avatarColor||'#7c3aed'};width:80px;height:80px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-family:Syne,sans-serif;font-size:2rem;font-weight:800;color:#fff">${currentUser.username[0].toUpperCase()}</div>`;

    container.innerHTML = `
        <div class="acct-avatar-section">
            <label class="acct-avatar-wrap" title="Ganti foto profil" style="position:relative;width:80px;height:80px;cursor:pointer;margin-bottom:0.75rem">
                ${avatarHtml}
                <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;border-radius:50%;opacity:0;transition:opacity 0.2s;background:rgba(0,0,0,0.5)" class="acct-avatar-edit"><i class="fas fa-camera" style="color:#fff;font-size:1.2rem"></i></div>
                <input type="file" id="acctPicInput" accept="image/*" style="display:none">
            </label>
            <div class="acct-username">${currentUser.username}</div>
            <div class="acct-email">${currentUser.email||''}</div>
            ${bio ? `<div class="acct-bio-display">${bio}</div>` : ''}
            <div class="acct-stats-row">
                <div class="acct-stat"><div class="acct-stat-num">${totalPlays}</div><div class="acct-stat-label">Putar</div></div>
                <div class="acct-stat"><div class="acct-stat-num">${totalMins}</div><div class="acct-stat-label">Menit</div></div>
                <div class="acct-stat"><div class="acct-stat-num">${favorites.length}</div><div class="acct-stat-label">Favorit</div></div>
            </div>
        </div>
        <div class="acct-section">
            <div class="acct-section-title">Bio</div>
            <div class="acct-field">
                <textarea id="acctBio" class="acct-input" rows="2" placeholder="Ceritakan tentang dirimu...">${bio}</textarea>
            </div>
            <div class="acct-section-title">Warna Avatar</div>
            <div class="acct-color-row">
                ${avatarColors.map(c=>`<button class="acct-color-btn ${(currentUser.avatarColor||'#7c3aed')===c?'active':''}" style="background:${c};width:30px;height:30px;border-radius:50%;border:2px solid ${(currentUser.avatarColor||'#7c3aed')===c?'#fff':'transparent'};cursor:pointer" onclick="_setAvatarColor('${c}')"></button>`).join('')}
            </div>
            <div class="acct-section-title">Border Avatar</div>
            <div class="acct-border-row">
                ${borderOptions.map(b=>`<button class="acct-border-btn ${borderStyle===b.id?'active':''}" data-style="${b.id}" onclick="_setBorderStyle('${b.id}')">${b.label}</button>`).join('')}
            </div>
            <div style="display:flex;align-items:center;gap:0.75rem;margin-top:0.5rem;margin-bottom:0.75rem">
                <span style="font-size:0.68rem;color:var(--text-muted);font-weight:700;text-transform:uppercase">Warna Border</span>
                <input type="color" id="acctBorderColor" value="${borderColor}" style="width:38px;height:28px;cursor:pointer;border:none;background:none" oninput="_setBorderColor(this.value)">
            </div>
            <div class="acct-section-title">Background</div>
            <div class="acct-border-row" style="margin-bottom:0.75rem">
                <button class="acct-border-btn" onclick="closeSidebar();document.getElementById('bgChangerPanel')?.classList.toggle('visible')"><i class="fas fa-palette"></i> Pilih BG</button>
                <button class="acct-border-btn" onclick="document.getElementById('bgVideoUpload')?.click()"><i class="fas fa-film"></i> Video BG</button>
            </div>
            <button class="acct-save-btn" onclick="_saveProfileChanges()"><i class="fas fa-save"></i> Simpan Perubahan</button>
            <button class="acct-logout-btn" onclick="logoutUser()"><i class="fas fa-sign-out-alt"></i> Logout</button>
        </div>`;

    // hover effect for avatar
    const wrap = container.querySelector('.acct-avatar-wrap');
    const overlay = wrap?.querySelector('.acct-avatar-edit');
    if (wrap && overlay) {
        wrap.addEventListener('mouseenter', () => overlay.style.opacity = '1');
        wrap.addEventListener('mouseleave', () => overlay.style.opacity = '0');
    }
    // photo upload
    const inp = document.getElementById('acctPicInput');
    if (inp) inp.addEventListener('change', (e) => {
        const file = e.target.files[0]; if (!file) return;
        const reader = new FileReader();
        reader.onload = (ev) => {
            currentUser.profilePic = ev.target.result;
            _persistUser(); updateNavUserBtn(); renderProfilePanel();
            showToast('📸 Foto profil diperbarui!');
        };
        reader.readAsDataURL(file);
    });
}

function updateAvatarColor(color) {
    currentUser.avatarColor = color;
    if (userDb[currentUser.username?.toLowerCase()]) userDb[currentUser.username.toLowerCase()].avatarColor = color;
    saveUserDb(); saveCurrentUser(); updateNavUserBtn(); renderProfilePanel(); applyUserBorderStyle();
}
function updateBorderStyle(style) {
    currentUser.borderStyle = style;
    if (userDb[currentUser.username?.toLowerCase()]) userDb[currentUser.username.toLowerCase()].borderStyle = style;
    saveUserDb(); saveCurrentUser(); applyUserBorderStyle();
}
function updateBorderColor(color) {
    currentUser.borderColor = color;
    if (userDb[currentUser.username?.toLowerCase()]) userDb[currentUser.username.toLowerCase()].borderColor = color;
    saveUserDb(); saveCurrentUser(); applyUserBorderStyle();
}
function applyUserBorderStyle() {
    const btn = document.getElementById('navbarUserBtn'); if (!btn || !currentUser) return;
    const style = currentUser.borderStyle || 'ring-pulse';
    const color = currentUser.borderColor || '#b76cff';
    btn.className = 'navbar-user-avatar';
    if (style !== 'border-none') btn.classList.add(`border-${style}`);
    btn.style.setProperty('--user-border-color', color);
    btn.style.borderColor = color;
}

// ══════════════════════════════════════════════════════════
// DEFINITIVE updateNavUserBtn
// ══════════════════════════════════════════════════════════
function updateNavUserBtn() {
    const actions = document.querySelector('.navbar-actions'); if (!actions) return;
    const existing = document.getElementById('navbarUserBtn'); if (existing) existing.remove();
    if (currentUser) {
        const btn = document.createElement('button');
        btn.id = 'navbarUserBtn'; btn.className = 'navbar-user-avatar';
        btn.style.background = currentUser.avatarColor || '#7c3aed';
        btn.title = currentUser.username;
        if (currentUser.profilePic) {
            btn.innerHTML = `<img src="${currentUser.profilePic}" alt="">`;
            btn.style.padding = '0'; btn.style.overflow = 'hidden';
        } else { btn.textContent = currentUser.username[0].toUpperCase(); }
        btn.addEventListener('click', () => { openSidebar(); showPanel('sidebarProfilePanel'); renderProfilePanel(); });
        actions.insertBefore(btn, actions.firstChild);
        const lt = document.getElementById('navLoginText'); if (lt) lt.textContent = currentUser.username;
        setTimeout(applyUserBorderStyle, 10);
    }
    // Refresh greeting
    const greetEl = document.getElementById('heroGreeting');
    if (greetEl) greetEl.textContent = getGreeting();
}

// ══════════════════════════════════════════════════════════
// DEFINITIVE loginUser / logoutUser
// ══════════════════════════════════════════════════════════
function loginUser(user) {
    currentUser = user; saveCurrentUser(); syncUserData();
    updateNavUserBtn(); updateFavBadge(); updateDownloadBadge();
    const lt = document.getElementById('navLoginText'); if (lt) lt.textContent = user.username;
    renderHomePage();
    showToast(`👋 Halo, ${user.username}!`);
}
function logoutUser() {
    if (currentUser) saveUserSnapshot();
    currentUser = null; saveCurrentUser(); updateNavUserBtn();
    const lt = document.getElementById('navLoginText'); if (lt) lt.textContent = 'Login / Daftar';
    showMainSidebarPanel(); closeSidebar(); showToast('👋 Logout berhasil');
}

// ══════════════════════════════════════════════════════════
// DEFINITIVE renderStats — with auth check
// ══════════════════════════════════════════════════════════
function renderStats() {
    const container = document.getElementById('statsPanelContent'); if (!container) return;
    if (!currentUser) {
        container.innerHTML = `<div class="guest-locked-bar" style="margin:1rem"><i class="fas fa-lock"></i><span>Login untuk lihat statistikmu.</span><button onclick="closeSidebar();openLoginModal()">Login</button></div>
        <div class="sublist-empty"><i class="fas fa-chart-pie" style="font-size:2rem;opacity:0.2;display:block;margin-bottom:0.5rem"></i>Statistik hanya tersedia untuk akun terdaftar.</div>`;
        return;
    }
    const totalPlays = Object.values(listenStats).reduce((s, v) => s + (v.plays||0), 0);
    const totalSecs  = Object.values(listenStats).reduce((s, v) => s + (v.totalSeconds||0), 0);
    const totalMins  = Math.floor(totalSecs / 60);
    const totalHrs   = (totalSecs/3600).toFixed(1);
    const uniqueSongs = songs.filter(s => listenStats[s.id]?.plays > 0).length;
    const topSongs = songs.map(s => ({ song: s, plays: listenStats[s.id]?.plays||0, secs: listenStats[s.id]?.totalSeconds||0 }))
        .filter(x => x.plays > 0).sort((a,b) => b.plays-a.plays).slice(0,5);
    const maxPlays = topSongs[0]?.plays || 1;

    container.innerHTML = `
        <div class="stats-grid" style="margin:0.75rem 0">
            <div class="stats-card"><div class="stats-card-num">${totalPlays}</div><div class="stats-card-label">Total Putar</div></div>
            <div class="stats-card"><div class="stats-card-num">${totalMins}</div><div class="stats-card-label">Menit</div></div>
            <div class="stats-card"><div class="stats-card-num">${totalHrs}</div><div class="stats-card-label">Jam</div></div>
            <div class="stats-card"><div class="stats-card-num">${uniqueSongs}</div><div class="stats-card-label">Lagu</div></div>
        </div>
        <div class="stats-section-title">🏆 Top Lagu</div>
        <div id="statsTopList" class="stats-top-list"></div>`;

    const list = container.querySelector('#statsTopList');
    if (!topSongs.length) {
        list.innerHTML = `<div class="sublist-empty"><i class="fas fa-headphones" style="font-size:2rem;opacity:0.25;display:block;margin-bottom:0.5rem"></i>Belum ada data. Putar lagu dulu!</div>`;
        return;
    }
    topSongs.forEach((item, i) => {
        const pct = Math.round((item.plays/maxPlays)*100);
        const el = document.createElement('div'); el.className = 'stats-top-item';
        el.innerHTML = `<span class="stats-rank ${i<3?'top'+(i+1):''}">${['🥇','🥈','🥉','4','5'][i]}</span>
            <img src="${item.song.albumArtUrl}" class="stats-item-art" loading="lazy">
            <div class="stats-item-info"><div class="stats-item-title">${item.song.title}</div><div class="stats-item-plays">${item.plays}× · ${Math.floor(item.secs/60)} mnt</div></div>
            <div class="stats-bar-wrap"><div class="stats-bar-fill" style="width:${pct}%"></div></div>`;
        el.addEventListener('click', () => { const idx=songs.indexOf(item.song); closeSidebar(); currentSongIndex=idx; loadSong(songs[idx]); playTrack(); showPlayerPage(); });
        list.appendChild(el);
    });
}

// ══════════════════════════════════════════════════════════
// FIX BUG FORM — remove duplicate listeners, use onclick
// ══════════════════════════════════════════════════════════
(function() {
    const btn = document.getElementById('submitBugBtn');
    if (!btn) return;
    const newBtn = btn.cloneNode(true); // remove ALL previous listeners
    btn.parentNode.replaceChild(newBtn, btn);
    newBtn.addEventListener('click', async function() {
        const type   = document.getElementById('bugType').value;
        const title  = document.getElementById('bugTitle').value.trim();
        const detail = document.getElementById('bugDetail').value.trim();
        const name   = document.getElementById('bugName').value.trim();
        if (!title || !detail) { showToast('⚠️ Judul dan detail wajib diisi!'); return; }
        newBtn.disabled = true;
        newBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Mengirim...';
        try {
            // Handle image upload
            let imageNote = '';
            const imgFile = document.getElementById('bugImageInput')?.files?.[0];
            if (imgFile) {
                const b64 = await new Promise(res => {
                    const r = new FileReader();
                    r.onload = e => res(e.target.result.substring(0, 500) + '...[image attached]');
                    r.readAsDataURL(imgFile);
                });
                imageNote = '\n[Screenshot dilampirkan oleh pengguna]';
            }
            const res = await fetch('https://formspree.io/f/mgvlwopd', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify({ 'Jenis': type, 'Judul': title, 'Detail': detail + imageNote, 'Nama': name||'Anonim', 'Ada Screenshot': imgFile ? 'Ya' : 'Tidak', '_subject': `[Zaymix ${type.toUpperCase()}] ${title}` })
            });
            if (res.ok) {
                document.getElementById('bugFormWrap').style.display = 'none';
                document.getElementById('bugSuccess').classList.remove('hidden');
                showToast('✅ Laporan terkirim!');
            } else throw new Error('failed');
        } catch { showToast('❌ Gagal mengirim, coba lagi.'); }
        finally { newBtn.disabled=false; newBtn.innerHTML='<i class="fas fa-paper-plane"></i> Kirim Laporan'; }
    });
    // Image upload label update
    const imgInput = document.getElementById('bugImageInput');
    if (imgInput) {
        imgInput.addEventListener('change', (e) => {
            const f = e.target.files[0];
            const lbl = document.getElementById('bugImageLabelText');
            if (lbl) lbl.textContent = f ? f.name : 'Pilih gambar screenshot...';
        });
    }
    const again = document.getElementById('bugSendAnother');
    if (again) again.addEventListener('click', () => {
        ['bugTitle','bugDetail','bugName'].forEach(id => document.getElementById(id).value='');
        document.getElementById('bugType').value='bug';
        document.getElementById('bugSuccess').classList.add('hidden');
        document.getElementById('bugFormWrap').style.display='';
        const lbl = document.getElementById('bugImageLabelText');
        if (lbl) lbl.textContent = 'Pilih gambar screenshot...';
        const ii = document.getElementById('bugImageInput');
        if (ii) ii.value = '';
    });
})();

// ══════════════════════════════════════════════════════════
// APPLE MUSIC LYRIC — character-by-character progressive glow
// ══════════════════════════════════════════════════════════
function renderLyrics(lyrics) {
    lyricsContainer.innerHTML = '';
    if (!lyrics || !lyrics.length) {
        lyricsContainer.innerHTML = '<p style="opacity:0.4;font-size:0.85rem;text-align:center;padding:2rem">Tidak ada lirik</p>';
        return;
    }
    lyrics.forEach((line, idx) => {
        const el = document.createElement('span');
        el.className = 'lyric-line';
        el.setAttribute('data-time', line.time);
        el.setAttribute('data-idx', idx);
        el.textContent = line.text;
        el.addEventListener('click', () => { if (audioPlayer.duration) audioPlayer.currentTime = line.time; });
        lyricsContainer.appendChild(el);
        if (idx % 4 === 3) {
            const gap = document.createElement('span');
            gap.style.cssText = 'display:block;height:0.8em';
            lyricsContainer.appendChild(gap);
        }
    });
}

function updateLyricGlow(currentTime) {
    const lines = lyricsContainer.querySelectorAll('.lyric-line');
    if (!lines.length) return;

    // Get audio energy for breathing effect
    let energy = 0.5;
    if (eqInited && analyserNode) {
        try {
            const d = new Uint8Array(analyserNode.frequencyBinCount);
            analyserNode.getByteFrequencyData(d);
            energy = d.slice(0, 64).reduce((s, v) => s + v, 0) / (64 * 255);
        } catch(e) {}
    }

    // Get accent color for glow
    const accent = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#b76cff';
    const rgb = accent.match(/\d+/g) || ['183','108','255'];

    let activeIdx = 0;
    for (let i = 0; i < lines.length; i++) {
        if (currentTime >= parseFloat(lines[i].getAttribute('data-time'))) activeIdx = i;
        else break;
    }

    lines.forEach((line, i) => {
        if (i === activeIdx) {
            // Active — glow breathes with audio energy
            const size1 = 8 + energy * 18;
            const size2 = 16 + energy * 32;
            const alpha1 = 0.75 + energy * 0.25;
            const alpha2 = 0.4 + energy * 0.3;
            line.style.color = '#fff';
            line.style.fontWeight = '700';
            line.style.fontSize = '1.02rem';
            line.style.transform = 'scale(1.02)';
            line.style.transformOrigin = 'left center';
            line.style.textShadow = `0 0 ${size1}px rgba(${rgb[0]},${rgb[1]},${rgb[2]},${alpha1}), 0 0 ${size2}px rgba(${rgb[0]},${rgb[1]},${rgb[2]},${alpha2}), 0 0 ${size2*2}px rgba(${rgb[0]},${rgb[1]},${rgb[2]},${alpha2*0.4})`;
            line.style.opacity = '1';
            line.style.transition = 'color 0.35s, text-shadow 0.2s, transform 0.35s, font-size 0.35s';
        } else if (i === activeIdx + 1) {
            // Next line — slightly bright preview
            line.style.color = 'rgba(255,255,255,0.5)';
            line.style.fontWeight = '500';
            line.style.fontSize = '0.93rem';
            line.style.transform = 'scale(1)';
            line.style.textShadow = 'none';
            line.style.opacity = '0.5';
            line.style.transition = 'all 0.4s';
        } else if (i < activeIdx) {
            // Past lines — faded
            line.style.color = 'rgba(255,255,255,0.2)';
            line.style.fontWeight = '400';
            line.style.fontSize = '0.93rem';
            line.style.transform = 'scale(1)';
            line.style.textShadow = 'none';
            line.style.opacity = '0.2';
            line.style.transition = 'all 0.5s';
        } else {
            // Far future lines
            line.style.color = 'rgba(255,255,255,0.3)';
            line.style.fontWeight = '400';
            line.style.fontSize = '0.93rem';
            line.style.transform = 'scale(1)';
            line.style.textShadow = 'none';
            line.style.opacity = '0.3';
            line.style.transition = 'all 0.5s';
        }
    });

    // Auto-scroll active line into center view
    if (lines[activeIdx]) {
        const cr = lyricsContainer.getBoundingClientRect();
        const lr = lines[activeIdx].getBoundingClientRect();
        if (lr.bottom > cr.bottom - 20 || lr.top < cr.top + 20) {
            lines[activeIdx].scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }
}



// ══════════════════════════════════════════════════════════
// CSS for lyric chars
// ══════════════════════════════════════════════════════════

// ══════════════════════════════════════════════════════════


// ══════════════════════════════════════════════════════════
// INIT
// ══════════════════════════════════════════════════════════
function init() {
    setSplashStatus('Memuat lagu…');
    setTimeout(() => {
        try {
            if (currentUser) syncUserData();
            if (songs.length > 0) {
                const savedIdx = currentUser ? getUserData('lastSongIndex') : null;
                if (savedIdx !== null && savedIdx >= 0 && savedIdx < songs.length) currentSongIndex = savedIdx;
                loadSong(songs[currentSongIndex]);
                if (currentUser) {
                    const savedTime = getUserData('lastSongTime');
                    if (savedTime && savedTime > 5) showResumeToast(songs[currentSongIndex], savedTime);
                }
            } else {
                albumArtPlayer.src = 'https://placehold.co/100x100/3a3a4e/e0e0e0?text=Musik';
                playerTrackTitle.textContent = 'No Songs';
                playerTrackArtist.textContent = 'Add songs';
                lyricsContainer.innerHTML = '<p>Please add songs from the list.</p>';
            }
            audioPlayer.volume = playerVolumeSlider.value;
            audioPlayer.playbackRate = playerSpeedSlider.value;
            currentSpeedDisplay.textContent = `${audioPlayer.playbackRate.toFixed(2)}x`;
            updatePlayPauseIcon(); updateRepeatButtonUI();
            updateFavBadge(); updateDownloadBadge();
            applyCardSize(getSetting('cardSize'));
            updateNavUserBtn();
            renderHomePage(); showHomePage();
        } catch(e) {
            console.error('Init error:', e);
        } finally {
            hideSplash();
            // Show onboarding after splash gone
            setTimeout(checkFirstVisit, 700);
        }
    }, 400);
}
// ══════════════════════════════════════════════════════════
// ONBOARDING — show on first visit
// ══════════════════════════════════════════════════════════
function showOnboarding() {
    const modal = document.getElementById('onboardingModal');
    if (!modal) return;
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    document.getElementById('onboardLoginBtn').onclick = () => {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
        sessionStorage.setItem('zaymix_onboard_done','1');
        openLoginModal();
    };
    document.getElementById('onboardGuestBtn').onclick = () => {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
        sessionStorage.setItem('zaymix_onboard_done','1');
        showToast('👤 Mode tamu aktif');
    };
}

function checkFirstVisit() {
    // Show every time unless already logged in
    if (!currentUser) {
        const dismissed = sessionStorage.getItem('zaymix_onboard_done');
        if (!dismissed) showOnboarding();
    }
}


init();