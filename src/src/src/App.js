import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  // --- 1. Master Question Bank (Comprehensive coverage of all your Genesis characters) ---
  const genesisQuestions = [
    // 🧔 ADAM & CREATION
    { id: 1, level: 1, charName: "ஆதாம் (Adam)", charPic: "🧔", question: "முதலாம் நாள் எதை படைத்தார்?", options: ["வானம்", "பகல் / வெளிச்சம்", "பூமி", "நெருப்பு"], correctAnswer: "பகல் / வெளிச்சம்", sticker: "🌟 Light Witness", verse: "உன் இருள் கர்த்தரால் வெளிச்சமாகும்; அவர் உன்னை எப்போதும் நடத்துவார். - ஏசாயா 58:11" },
    { id: 2, level: 1, charName: "ஆதாம் (Adam)", charPic: "🧔", question: "இரண்டாவது நாள் எதை படைத்தார்?", options: ["ஆகாயவிரிவு (வானம்)", "சூரியன்", "கடல்", "மரங்கள்"], correctAnswer: "ஆகாயவிரிவு (வானம்)", sticker: "🌟 Light Witness", verse: "வானத்தையும் பூமியையும் உண்டாக்கின கர்த்தரிடத்திலிருந்து உனக்கு ஒத்தாசை வரும். - சங்கீதம் 121:2" },
    { id: 3, level: 1, charName: "ஆதாம் (Adam)", charPic: "🧔", question: "மூன்றாவது நாள் எதை படைத்தார்?", options: ["சந்திரன்", "பூமியின் புல், பூண்டுகள் & மரங்கள்", "மிருகங்கள்", "பறவைகள்"], correctAnswer: "பூமியின் புல், பூண்டுகள் & மரங்கள்", sticker: "🌟 Light Witness", verse: "அவன் நீர்க்கால்களின் ஓரமாய் நடப்பட்டு, தன் காலத்தில் தன் கனியைத் தந்து, இலையுதிராதிருக்கிற மரத்தைப் போலிருப்பான். - சங்கீதம் 1:3" },
    { id: 4, level: 2, charName: "ஆதாம் (Adam)", charPic: "🧔", question: "நான்காவது நாள் தேவன் எதை உண்டாக்கினார்?", options: ["மனுஷன்", "சூரியன், சந்திரன் & நட்சத்திரங்கள்", "கடல் வாழ் உயிரினங்கள்", "ஆகாயம்"], correctAnswer: "சூரியன், சந்திரன் & நட்சத்திரங்கள்", sticker: "☀️ Cosmic Explorer", verse: "நீதிமான்கள் சூரியனைப்போல பிதாவின் ராஜ்யத்திலே பிரகாசிப்பார்கள். - மத்தேயு 13:43" },
    { id: 5, level: 2, charName: "ஆதாம் (Adam)", charPic: "🧔", question: "ஐந்தாவது நாள் தேவன் எதை உண்டாக்கினார்?", options: ["ஜலத்திலுள்ள ஜீவஜந்துக்கள் & பறவைகள்", "ஊரும் பிராணிகள்", "ஆதாம்", "காட்டு மிருகங்கள்"], correctAnswer: "ஜலத்திலுள்ள ஜீவஜந்துக்கள் & பறவைகள்", sticker: "☀️ Cosmic Explorer", verse: "ஆகாயத்துப் பறவைகளைக் கவனித்துப்பாருங்கள்; அவைகளுக்கும் உங்கள் பரமபிதா பிழைப்பூட்டுகிறார். - மத்தேயு 6:26" },
    { id: 6, level: 2, charName: "ஆதாம் (Adam)", charPic: "🧔", question: "ஆறாம் நாள் தேவன் என்ன படைத்தார்?", options: ["பூமியின் மிருகங்கள் & மனுஷன்", "சூரியன்", "ஆகாயவிரிவு", "செடிகள்"], correctAnswer: "பூமியின் மிருகங்கள் & மனுஷன்", sticker: "☀️ Cosmic Explorer", verse: "நான் உன்னைத் தாயின் வயிற்றில் உருவாக்கு முன்னே உன்னை அறிந்தேன். - எரேமியா 1:5" },
    { id: 7, level: 3, charName: "ஆதாம் (Adam)", charPic: "🧔", question: "ஏழாம் நாள் என்ன நாளாய் இருந்தது?", options: ["வேலை நாள்", "பண்டிகை நாள்", "ஓய்வு நாள் (Sabbath)", "பலி செலுத்தும் நாள்"], correctAnswer: "ஓய்வு நாள் (Sabbath)", sticker: "🕊️ Sabbath Keeper", verse: "வருத்தப்பட்டுப் பாரஞ்சுமக்கிறவர்களே! நீங்கள் எல்லாரும் என்னிடத்தில் வாருங்கள், நான் உங்களுக்கு இளைப்பாறுதல் தருவேன். - மத்தேயு 11:28" },
    { id: 8, level: 3, charName: "ஆதாம் (Adam)", charPic: "🧔", question: "மனுஷன் எப்பொழுது ஜீவாத்துமாவானான்?", options: ["மண்ணால் உருவான உடனே", "தேவன் நாசியிலே ஜீவசுவாசத்தை ஊதினபோது", "ஏதேன் தோட்டத்தில் விட்டபோது", "கனி புசித்த பின்பு"], correctAnswer: "தேவன் நாசியிலே ஜீவசுவாசத்தை ஊதினபோது", sticker: "🕊️ Sabbath Keeper", verse: "கர்த்தராகிய நான் உனக்கு ஜீவனையும் சுகத்தையும் தந்து, உன்னைத் திடப்படுத்துவேன். - ஏசாயா 42:6" },
    { id: 9, level: 3, charName: "ஆதாம் (Adam)", charPic: "🧔", question: "தேவன் எதற்காக மனுஷனை சிருஷ்டித்தார்?", options: ["மிருகங்களை வேட்டையாட", "தோட்டத்தைப் பண்படுத்தவும் காக்கவும்", "உலகை ஆளுகை செய்ய மட்டும்", "சும்மா இருக்க"], correctAnswer: "தோட்டத்தைப் பண்படுத்தவும் காக்கவும்", sticker: "🕊️ Sabbath Keeper", verse: "நீ செய்கிற காரியங்களையெல்லாம் கர்த்தருக்கு ஒப்புவி, அப்பொழுது உன் யோசனைகள் ஸ்திரப்படும். - நீதிமொழிகள் 16:3" },

    // 👩 EVE & GARDEN
    { id: 10, level: 4, charName: "ஏவாள் (Eve)", charPic: "👩", question: "நாலு பெரிய ஆறுகளின் பெயர் என்ன?", options: ["பிகோன், கீகோன், இதெக்கேல், ஐபிராத்து", "யோர்தான், நைல், கங்கை, ஐபிராத்து", "பிகோன், யோர்தான், செங்கடல், நைல்", "கீகோன், எகிப்து ஆறு, பிகோன், யூப்ரடீஸ்"], correctAnswer: "பிகோன், கீகோன், இதெக்கேல், ஐபிராத்து", sticker: "🏞️ Eden Navigator", verse: "தாகமுள்ளவன்மேல் தண்ணீரையும், வறண்ட நிலத்தின்மேல் ஆறுகளையும் ஊற்றுவேன். - ஏசாயா 44:3" },
    { id: 11, level: 4, charName: "ஏவாள் (Eve)", charPic: "👩", question: "மனுஷியை தேவன் எப்படி உண்டாக்கினார்?", options: ["மண்ணிலிருந்து", "ஆதாமின் விலா எலும்பிலிருந்து", "வார்த்தையினால்", "சூரிய ஒளியிலிருந்து"], correctAnswer: "ஆதாமின் விலா எலும்பிலிருந்து", sticker: "🏞️ Eden Navigator", verse: "இருவர் ஒருமித்து வாழ்வது நலம், அவர்களுக்கு நல்ல பலன் கிடைக்கும். - பிரசங்கி 4:9" },
    { id: 12, level: 4, charName: "ஏவாள் (Eve)", charPic: "👩", question: "தேவன் புசிக்க வேண்டாம் என்று சொன்ன கனியின் பெயர் என்ன?", options: ["ஜீவவிருட்சத்தின் கனி", "நன்மை தீமை அறியத்தக்க விருட்சத்தின் கனி", "அத்திப்பழம்", "திராட்சைப்பழம்"], correctAnswer: "நன்மை தீமை அறியத்தக்க விருட்சத்தின் கனி", sticker: "🏞️ Eden Navigator", verse: "சோதனைக்குட்படாதபடிக்கு விழித்திருந்து ஜெபம் பண்ணுங்கள். - மாற்கு 14:38" },
    { id: 13, level: 5, charName: "ஏவாள் (Eve)", charPic: "👩", question: "யார் யாருடைய வித்துக்கும் பகை உண்டாகும்?", options: ["ஆதாமுக்கும் ஏவாளுக்கும்", "ஸ்திரீயின் வித்துக்கும் சர்ப்பத்தின் வித்துக்கும்", "காயீனுக்கும் ஆபேயிலுக்கும்", "மனுஷனுக்கும் மிருகங்களுக்கும்"], correctAnswer: "ஸ்திரீயின் வித்துக்கும் சர்ப்பத்தின் வித்துக்கும்", sticker: "🛡️ Chosen Generation", verse: "சமாதானத்தின் தேவன் சீக்கிரமாய்ச் சாத்தானை உங்கள் கால்களின் கீழே நசுக்கிப்போடுவார். - ரோமர் 16:20" },
    { id: 14, level: 5, charName: "ஏவாள் (Eve)", charPic: "👩", question: "தேவன் ஆதாம் ஏவாளுக்கு என்ன உடையை கொடுத்தார்?", options: ["அத்தி இலை உடை", "தோல் உடைகள்", "பட்டு உடை", "சணல் உடை"], correctAnswer: "தோல் உடைகள்", sticker: "🛡️ Chosen Generation", verse: "அவர் இரட்சிப்பின் வஸ்திரங்களை எனக்கு உடுத்தி, நீதியின் சால்வையை எனக்குத் தரித்தார். - ஏசாயா 61:10" },
    { id: 15, level: 5, charName: "ஏவாள் (Eve)", charPic: "👩", question: "ஆதாம் ஏவாளுக்கு எத்தனை பிள்ளைகள்?", options: ["காயீன், ஆபேல், சேத்", "காயீன் மட்டும்", "நோவா, சேம், காம்", "பிள்ளைகளே இல்லை"], correctAnswer: "காயீன், ஆபேல், சேத்", sticker: "🛡️ Chosen Generation", verse: "உன் பிள்ளைகளெல்லாரும் கர்த்தரால் போதிக்கப்பட்டிருப்பார்கள்; உன் பிள்ளைகளின் சமாதானம் பெரிதாயிருக்கும். - ஏசாயா 54:13" },

    // ✨ ENOCH
    { id: 16, level: 6, charName: "ஏனோக்கு (Enoch)", charPic: "✨", question: "ஆதாமின் உயிரோடு இருந்த ஆயுசு நாட்கள் எவ்வளவு?", options: ["930 வருடங்கள்", "120 வருடங்கள்", "1000 வருடங்கள்", "500 வருடங்கள்"], correctAnswer: "930 வருடங்கள்", sticker: "📜 History Scholar", verse: "முதிர்வயதிலும் அவர்கள் கனி தந்து, புஷ்டியும் பசுமையுமாயிருப்பார்கள். - சங்கீதம் 92:14" },
    { id: 17, level: 6, charName: "ஏனோக்கு (Enoch)", charPic: "✨", question: "ஏனோக்கின் அப்பா பெயர் என்ன?", options: ["யாரேத்", "லாமேக்கு", "சேத்", "மத்தூசலா"], correctAnswer: "யாரேத்", sticker: "📜 History Scholar", verse: "ஒரு தகப்பன் தன் பிள்ளைகளுக்கு இரங்குவதுபோல, கர்த்தர் தமக்கு அஞ்சுகிறவர்களுக்கு இரங்குவார். - சங்கீதம் 103:13" },
    { id: 18, level: 6, charName: "ஏனோக்கு (Enoch)", charPic: "✨", question: "ஏனோக்கின் வயது என்ன?", options: ["365 வருடங்கள்", "969 வருடங்கள்", "120 வருடங்கள்", "500 வருடங்கள்"], correctAnswer: "365 வருடங்கள்", sticker: "📜 History Scholar", verse: "கர்த்தருக்குக் காத்திருக்கிறவர்களோ புதுப்பெலன் அடைந்து, கழுகுகளைப்போலச் சிறகடித்து எழும்புவார்கள். - ஏசாயா 40:31" },
    { id: 19, level: 7, charName: "ஏனோக்கு (Enoch)", charPic: "✨", question: "ஏனோக்கு யாருடன் சஞ்சரித்துக் கொண்டிருக்கும் போது காணப்படாமல் போனான்?", options: ["ஆதாமுடன்", "தேவனுடனே", "ஏவாளுடன்", "தன் பிள்ளைகளுடன்"], correctAnswer: "தேவனுடனே", sticker: "✨ Walk with God", verse: "நீ பயப்படாதே, நான் உன்னுடனே இருக்கிறேன்; திகையாதே, நான் உன் தேவன். - ஏசாயா 41:10" },

    // 🚢 NOAH & THE FLOOD
    { id: 20, level: 7, charName: "நோவா (Noah)", charPic: "🚢", question: "நோவா என்பதின் அர்த்தம் என்ன?", options: ["ஆறுதல் / இளைப்பாறுதல்", "பெரிய மனிதன்", "படகுகாரன்", "நீதிமான்"], correctAnswer: "ஆறுதல் / இளைப்பாறுதல்", sticker: "✨ Walk with God", verse: "என் சமாதானத்தையே உங்களுக்குக் கொடுக்கிறேன்; உங்கள் இருதயம் கலங்காமலும் பயப்படாமலும் இருப்பதாக. - யோவான் 14:27" },
    { id: 21, level: 7, charName: "நோவா (Noah)", charPic: "🚢", question: "நோவாவின் பிள்ளைகள் பெயர் என்ன?", options: ["சேம், காம், யாப்பேத்", "காயீன், ஆபேல்", "ஆபிரகாம், ஈசாக்கு", "ரூபன், சிமியோன்"], correctAnswer: "சேம், காம், யாப்பேத்", sticker: "✨ Walk with God", verse: "நீயும் உன் வீட்டாரனைவரும் இரட்சிக்கப்படுவீர்கள் என்று சொன்னான். - அப்போஸ்தலர் 16:31" },
    { id: 22, level: 8, charName: "நோவா (Noah)", charPic: "🚢", question: "நோவாவின் காலத்தில் இருந்தவர்களுக்குள்ளே அவன் எப்படிப்பட்டவனாய் இருந்தான்?", options: ["நீதிமானும் உத்தமனுமாய்", "பலகீனனாய்", "பணக்காரனாய்", "அரசனைப் போல"], correctAnswer: "நீதிமானும் உத்தமனுமாய்", sticker: "🏗️ Ark Builder", verse: "நீதிமானை கர்த்தர் ஆசீர்வதித்து, கேடகத்தினால் மூடுவதுபோல அவனைத் தயவினால் மூடுவார். - சங்கீதம் 5:12" },
    { id: 23, level: 8, charName: "நோவா (Noah)", charPic: "🚢", question: "எந்த மரத்தால் பேழையை உண்டாக்கினான்?", options: ["அகாசியா மரம்", "கோபேர் மரம்", "கேதுரு மரம்", "ஒலிவ மரம்"], correctAnswer: "கோபேர் மரம்", sticker: "🏗️ Ark Builder", verse: "அவர் உன்னைத் தமது சிறகுகளாலே மூடுவார்; அவர் இறக்கைகளின் கீழே அடைக்கலம் புகுவாய். - சங்கீதம் 91:4" },
    { id: 24, level: 8, charName: "நோவா (Noah)", charPic: "🚢", question: "பேழையின் நீளம் எவ்வளவு அதின் அகலம் எவ்வளவு உயரம் எவ்வளவு?", options: ["நீளம் 300 முழம், அகலம் 50 முழம், உயரம் 30 முழம்", "நீளம் 100 முழம், அகலம் 20 முழம், உயரம் 10 முழம்", "நீளம் 500 முழம், அகலம் 100 முழம், உயரம் 50 முழம்", "நீளம் 250 முழம், அகலம் 40 முழம், உயரம் 20 முழம்"], correctAnswer: "நீளம் 300 முழம், அகலம் 50 முழம், உயரம் 30 முழம்", sticker: "🏗️ Ark Builder", verse: "உனக்கு விரோதமாய் எழும்பும் எந்த ஆயுதமும் வாய்க்காதேபோகும். - ஏசாயா 54:17" },
    { id: 25, level: 9, charName: "நோவா (Noah)", charPic: "🚢", question: "பேழையில் எத்தனை ஜன்னல்கள் இருந்தது?", options: ["ஒரை ஒரு ஜன்னல்", "பத்து ஜன்னல்கள்", "ஜன்னல்களே இல்லை", "நான்கு பக்கமும் ஜன்னல்"], correctAnswer: "ஒரே ஒரு ஜன்னல்", sticker: "🌊 Flood Survivor", verse: "நான் வானத்தின் பலகணிகளைத் திறந்து, இடங்கொள்ளாமற்போகுமட்டும் ஆசீர்வாதத்தை ஊற்றுவேன். - மல்கியா 3:10" },
    { id: 26, level: 9, charName: "நோவா (Noah)", charPic: "🚢", question: "வானத்தின் மதகுகள் திறக்கப்படும் போது நோவாவின் வயது என்ன?", options: ["500 வயது", "600 வயது", "950 வயது", "120 வயது"], correctAnswer: "600 வயது", sticker: "🌊 Flood Survivor", verse: "உன் வாழ்நாட்களெல்லாம் நீ நன்மையையும் கிருபையும் தொடரப் பெறுவாய். - சங்கீதம் 23:6" },
    { id: 27, level: 9, charName: "நோவா (Noah)", charPic: "🚢", question: "பேழையில் இருந்த மனிதர்களின் எண்ணிக்கை எத்தனை?", options: ["4 பேர்", "8 பேர்", "12 பேர்", "100 பேர்"], correctAnswer: "8 பேர்", sticker: "🌊 Flood Survivor", verse: "சிறு மந்தையே, பயப்படாதே, உங்களுக்கு ராஜ்யத்தைத் தர உங்கள் பிதா பிரியமாயிருக்கிறார். - லூக்கா 12:32" },
    { id: 28, level: 10, charName: "நோவா (Noah)", charPic: "🚢", question: "எத்தனை நாள் மழை பொழிந்தது?", options: ["40 நாள் ராப்பகல்", "7 நாள்", "100 நாள்", "150 நாள்"], correctAnswer: "40 நாள் ராப்பகல்", sticker: "🦅 Hope Finder", verse: "பெருவெள்ளம் மதிலைத் தாக்கும்போது, கர்த்தருடைய ஆவி அதற்கெதிராய் கொடியேற்றுவார். - ஏசாயா 59:19" },
    { id: 29, level: 10, charName: "நோவா (Noah)", charPic: "🚢", question: "எத்தனை நாளுக்குப் பின்பு ஜலம் வடிந்தது?", options: ["150 நாளுக்குப் பின்பு", "40 நாளுக்குப் பின்பு", "7 நாளுக்குப் பின்பு", "300 நாளுக்குப் பின்பு"], correctAnswer: "150 நாளுக்குப் பின்பு", sticker: "🦅 Hope Finder", verse: "அமர்ந்த தண்ணீர்கள் அண்டையில் என்னை நடத்தி, என் ஆத்துமாவைத் தேற்றுகிறார். - சங்கீதம் 23:2-3" },
    { id: 30, level: 10, charName: "நோவா (Noah)", charPic: "🚢", question: "போக்கும் வரட்டுமாய் இருந்த பறவை எது?", options: ["புறா", "காகம்", "கழுகு", "சிட்டுகுருவி"], correctAnswer: "காகம்", sticker: "🦅 Hope Finder", verse: "காகங்களுக்கு இரையை ஆயத்தப்படுத்துகிறவர் யார்? அவைகள் தேவனை நோக்கிக் கூப்பிடுகின்றன. - யோபு 38:41" },
    { id: 31, level: 11, charName: "நோவா (Noah)", charPic: "🚢", question: "புறா தன் வாயில் எதை கொண்டு வந்து நோவாவிடம் கொடுத்தது?", options: ["ஒலிவ மரத்தின் கொழுந்து இலை", "அத்தி இலை", "கோதுமை கதிர்", "திராட்சை கனி"], correctAnswer: "ஒலிவ மரத்தின் கொழுந்து இலை", sticker: "🌈 Covenant Partner", verse: "நானோ உங்களுக்காக நினைத்திருக்கிற நினைவுகளை அறிவேன்; அது தீமைக்கல்ல, சமாதானத்துக்கேதுவான நினைவுகள். - எரேமியா 29:11" },
    { id: 32, level: 11, charName: "நோவா (Noah)", charPic: "🚢", question: "மாம்சத்தை அதன் உயிராகிய எதை புசிக்க வேண்டாம் என்று தேவன் சொன்னார்?", options: ["அதன் இரத்தம்", "அதன் கொழுப்பு", "அதன் தோல்", "அதன் எலும்பு"], correctAnswer: "அதன் இரத்தம்", sticker: "🌈 Covenant Partner", verse: "இயேசுவின் இரத்தம் சகல பாவங்களையும் நீக்கி, நம்மைச் சுத்திகரிக்கும். - 1 யோவான் 1:7" },
    { id: 33, level: 11, charName: "நோவா (Noah)", charPic: "🚢", question: "உடண்படிக்கையின் அடையாளமாக தேவன் மேகத்தில் எதை வைத்தார்?", options: ["மின்னல்", "வில் (வானவில்)", "பனிமூட்டம்", "பெரிய நட்சத்திரம்"], correctAnswer: "வில் (வானவில்)", sticker: "🌈 Covenant Partner", verse: "மலைகள் விலகினாலும் பர்வதங்கள் நிலைபெயர்ந்தாலும், என் கிருபை உன்னைவிட்டு விலகாது. - ஏசாயா 54:10" },
    { id: 34, level: 12, charName: "நோவா (Noah)", charPic: "🚢", question: "நோவாவின் நிர்வாணத்தை கண்டு தன் சகோதரருக்கு அறிவித்தவன் யார்?", options: ["காம்", "சேம்", "யாப்பேத்", "கானான்"], correctAnswer: "காம்", sticker: "👑 Ultimate Champion", verse: "அன்பு திரளான பாவங்களை மூடும்; ஒருவருக்கொருவர் அன்பாயிருங்கள். - 1 பேதுரு 4:8" },
    { id: 35, level: 12, charName: "நோவா (Noah)", charPic: "🚢", question: "நோவாவின் நிர்வாணத்தை காணாமல் அதை மூடினவர்கள் யார்?", options: ["சேமும் யாப்பேத்தும்", "காமும் கானானும்", "நோவாவின் மனைவி", "யாரும் மூடவில்லை"], correctAnswer: "சேமும் யாப்பேத்தும்", sticker: "👑 Ultimate Champion", verse: "ஒருவரையொருவர் கனம்பண்ணுகிறதிலே முந்திக்கொள்ளுங்கள். - ரோமர் 12:10" },
    { id: 36, level: 12, charName: "நோவா (Noah)", charPic: "🚢", question: "நோவா எந்த வயதில் மரித்தான்?", options: ["950 வயது", "600 வயது", "120 வயது", "930 வயது"], correctAnswer: "950 வயது", sticker: "👑 Ultimate Champion", verse: "நீ நெடுநாட்களாய் வாழ்ந்து, கர்த்தர் உனக்குக் காட்டும் இரட்சிப்பைக் காண்பாய். - சங்கீதம் 91:16" },

    // ⛺ ABRAHAM
    { id: 37, level: 13, charName: "ஆபிரகாம் (Abraham)", charPic: "⛺", question: "ஆபிரகாம் யாருடைய மகன்?", options: ["தேராகு", "நாகோர்", "ஆரான்", "லாமேக்கு"], correctAnswer: "தேராகு", sticker: "🎪 Father of Faith", verse: "நீ பயப்படாதே, நான் உனக்குக் கேடகமும், உனக்கு மகா பெரிய பலனுமாயிருக்கிறேன். - ஆதியாகமம் 15:1" },
    { id: 38, level: 13, charName: "ஆபிரகாம் (Abraham)", charPic: "⛺", question: "ஆபிரகாம் எந்த ஊரிலிருந்து புறப்பட்டான்?", options: ["ஊர் (Ur of Chaldeans)", "கானான்", "பாபிலோன்", "எகிப்து"], correctAnswer: "ஊர் (Ur of Chaldeans)", sticker: "🎪 Father of Faith", verse: "உன்னை ஆசீர்வதிக்கவே ஆசீர்வதித்து, உன் சந்ததியை வானத்து நட்சத்திரங்களைப்போல பெருகப்பண்ணுவேன். - ஆதியாகமம் 22:17" },
    { id: 39, level: 13, charName: "ஆபிரகாம் (Abraham)", charPic: "⛺", question: "ஆபிரகாமின் மனைவி பெயர் என்ன?", options: ["சாராள் (Sarai)", "ரெபெக்காள்", "லேயாள்", "ராகேல்"], correctAnswer: "சாராள் (Sarai)", sticker: "🎪 Father of Faith", verse: "கர்த்தரால் ஆகாத காரியம் ஒன்றுண்டோ? குறித்த காலத்திலே உன்னிடத்திற்குத் திரும்பிவருவேன். - ஆதியாகமம் 18:14" },
    { id: 40, level: 14, charName: "ஆபிரகாம் (Abraham)", charPic: "⛺", question: "கர்த்தர் ஆபிரகாமை எங்கு போகும்படி சொன்னார்?", options: ["நான் உனக்குக் காண்பிக்கும் தேசத்துக்கு (To the land I show)", "எகிப்துக்கு", "பாபிலோனுக்கு", "உபதேசியார் மலைக்கு"], correctAnswer: "நான் உனக்குக் காண்பிக்கும் தேசத்துக்கு (To the land I show)", sticker: "🗺️ Pioneer Patriarch", verse: "கர்த்தர் உன்னை எப்போதும் நடத்தி, மகா வறட்சியான காலங்களில் உன் ஆத்துமாவைத் திருப்தியாக்குவார். - ஏசாயா 58:11" },
    { id: 41, level: 14, charName: "ஆபிரகாம் (Abraham)", charPic: "⛺", question: "ஆபிரகாம் எத்தனை வயதில் கானானுக்கு வந்தான்?", options: ["75 வயது", "100 வயது", "50 வயது", "120 வயது"], correctAnswer: "75 வயது", sticker: "🗺️ Pioneer Patriarch", verse: "என் கிருபை உன்னை விட்டு விலகாது, என் சமாதானத்தின் உடன்படிக்கை நிலைபெயராது. - ஏசாயா 54:10" },

    // 👵 SARAH
    { id: 42, level: 15, charName: "சாராள் (Sarah)", charPic: "👵", question: "சாரா எத்தனை வயதில் கர்ப்பம் தரித்தாள்?", options: ["90 வயது", "75 வயது", "100 வயது", "50 வயது"], correctAnswer: "90 வயது", sticker: "👑 Matriarch Queen", verse: "வல்லமையுள்ளவர் எனக்குப் பெரிய காரியங்களைச் செய்தார்; அவருடைய நாமம் பரிசுத்தமுள்ளது. - லூக்கா 1:49" },
    { id: 43, level: 15, charName: "சாராள் (Sarah)", charPic: "👵", question: "சாரா எத்தனை வயதில் இறந்தாள்?", options: ["127 வயது", "100 வயது", "110 வயது", "90 வயது"], correctAnswer: "127 வயது", sticker: "👑 Matriarch Queen", verse: "உன் முதிர்வயதுவரைக்கும் நான் உன்னைத் தாங்குவேன்; உன்னை ஏந்தி ஏற்றி ரட்சிப்பேன். - ஏசாயா 46:4" },

    // 🏛️ LOT
    { id: 44, level: 16, charName: "லோத்து (Lot)", charPic: "🏛️", question: "லோத்து எந்த நகரத்தில் குடியிருந்தான்?", options: ["சோதோம் (Sodom)", "எகிப்து", "கானான்", "எருசலேம்"], correctAnswer: "சோதோம் (Sodom)", sticker: "🔥 Sodom Survivor", verse: "அவர் உன்னைத் தமது சிறகுகளாலே மூடுவார்; அவர் இறக்கைகளின் கீழே அடைக்கலம் புகுவாய். - சங்கீதம் 91:4" },
    { id: 45, level: 16, charName: "லோத்து (Lot)", charPic: "🏛️", question: "லோத்தின் மனைவி பின்னிட்டுப் பார்த்து என்னவாக மாறினாள்?", options: ["உப்புத்தூண் (Pillar of Salt)", "கல்தூண்", "பொன் சிலை", "மரம்"], correctAnswer: "உப்புத்தூண் (Pillar of Salt)", sticker: "🔥 Sodom Survivor", verse: "சோதனைக்குட்படாதபடிக்கு விழித்திருந்து ஜெபம் பண்ணுங்கள்; ஆவி உற்சாகமுள்ளதுதான், மாம்சமோ பலவீனமுள்ளது. - மத்தேயு 26:41" },

    // 🏜️ HAGAR & ISHMAEL
    { id: 46, level: 17, charName: "ஆகார் (Hagar)", charPic: "🏜️", question: "ஆகாரின் மகன் பெயர் என்ன?", options: ["இஸ்மவேல்", "ஈசாக்கு", "யாக்கோபு", "ஏசா"], correctAnswer: "இஸ்மவேல்", sticker: "💧 Desert Oasis", verse: "கர்த்தர் என் துக்கத்தைக் கேட்டருளினார்; அவர் என்னை நோக்கிப் பார்த்தார். - ஆதியாகமம் 16:11" },
    { id: 47, level: 17, charName: "ஆகார் (Hagar)", charPic: "🏜️", question: "ஆகார் கர்த்தரை என்ன காரணப் பெயரால் அழைத்தாள்?", options: ["என்னைக்காண்கிற தேவன் (El Roi)", "யெகோவா யீரே", "யெகோவா நிசி", "யெகோவா ஷாலோம்"], correctAnswer: "என்னைக்காண்கிற தேவன் (El Roi)", sticker: "💧 Desert Oasis", verse: "நீ கூப்பிடும்போது கர்த்தர் மறுஉத்தரவு கொடுப்பார்; நீ சத்தமிடும்போது: இதோ, நான் இருக்கிறேன் என்பார். - ஏசாயா 58:9" },

    // 🏹 ISHMAEL
    { id: 48, level: 18, charName: "இஸ்மவேல் (Ishmael)", charPic: "🏹", question: "இஸ்மவேல் வனாந்தரத்தில் என்ன வேலை செய்தான்?", options: ["வில்வித்தைக்காரன் (Archer)", "ஆடு மேய்ப்பவன்", "விவசாயி", "மீன்பிடிப்பவன்"], correctAnswer: "வில்வித்தைக்காரன் (Archer)", sticker: "🏹 Desert Archer", verse: "தேவன் வாலிபனோடிருந்தார்; அவன் வளர்ந்து, வனாந்தரத்திலே குடியிருந்து, வில்வித்தையிலே வல்லவனானான். - ஆதியாகமம் 21:20" },

    // 🪵 ISAAC
    { id: 49, level: 19, charName: "ஈசாக்கு (Isaac)", charPic: "🪵", question: "ஈசாக்கு என்பதின் அர்த்தம் என்ன?", options: ["சிரிப்பு (Laughter)", "அழுகை", "பெரியவன்", "பிரயாணம்"], correctAnswer: "சிரிப்பு (Laughter)", sticker: "🌾 Promised Seed", verse: "அப்பொழுது நம்முடைய வாய் சிரிப்பினாலும், நம்முடைய நாவு ஆனந்தசத்தத்தினாலும் நிறைந்திருக்கும். - சங்கீதம் 126:2" },
    { id: 50, level: 19, charName: "ஈசாக்கு (Isaac)", charPic: "🪵", question: "ஈசாக்கை பலியிட ஆபிரகாம் எந்த மலைக்கு போனான்?", options: ["மோரியா மலை (Moriah)", "சீனாய் மலை", "ஒலிவ மலை", "ஏரான் மலை"], correctAnswer: "மோரியா மலை (Moriah)", sticker: "🌾 Promised Seed", verse: "நீ உனக்கு மிகவும் அருமையான மகனையும் பலியிடப் பின்வாங்கவில்லை; ஆதலால் உன்னை ஆசீர்வதிப்பேன். - ஆதியாகமம் 22:16-17" },
    { id: 51, level: 20, charName: "ஈசாக்கு (Isaac)", charPic: "🪵", question: "ஈசாக்கின் மனைவி பெயர் என்ன?", options: ["ரெபெக்காள் (Rebekah)", "லேயாள்", "ராகேல்", "சாராள்"], correctAnswer: "ரெபெக்காள் (Rebekah)", sticker: "🌾 Promised Seed", verse: "கர்த்தர் உன் ஆத்துமாவைத் தேற்றி, உன்னை எந்நாளும் நடத்துவார். - சங்கீதம் 23:3" },

    // 🐫 REBEKAH
    { id: 52, level: 21, charName: "ரெபெக்காள் (Rebekah)", charPic: "🐫", question: "ரெபெக்காவை யார் ஈசாக்குக்காக தேடித் பிரயாணப்பட்டு வந்தான்?", options: ["ஆபிரகாமின் ஊழியக்காரன் எலியேசர்", "ஆபிரகாம்", "ஈசாக்கு", "யாக்கோபு"], correctAnswer: "ஆபிரகாமின் ஊழியக்காரன் எலியேசர்", sticker: "🐫 Chosen Bride", verse: "தேவதூதர் உனக்கு முன்னாக நடந்து, உன் பிரயாணத்தை வாய்க்கப்பண்ணுவார். - ஆதியாகமம் 24:7" },

    // 🤼 JACOB
    { id: 53, level: 22, charName: "யாக்கோபு (Jacob)", charPic: "🤼", question: "யாக்கோபு என்பதின் அர்த்தம் என்ன?", options: ["எட்டிப்பிடிப்பவன் / தந்திரக்காரன் (Heel catcher)", "நீதிமான்", "வலிமையானவன்", "ஆறுதல்"], correctAnswer: "எட்டிப்பிடிப்பவன் / தந்திரக்காரன் (Heel catcher)", sticker: "🪜 Ladder Dreamer", verse: "நான் உன்னுடனே இருக்கிறேன்; நீ போகிற இடத்திலெல்லாம் உன்னைக் காத்து, உன்னைத் திருப்புவேன். - ஆதியாகமம் 28:15" },
    { id: 54, level: 22, charName: "யாக்கோபு (Jacob)", charPic: "🤼", question: "யாக்கோபுக்கு இஸ்ரவேல் என்று பெயர் மாறியது ஏன்?", options: ["தேவனோடும் மனிதரோடும் போராடி ஜெயித்ததால்", "லாபானிடம் தப்பித்ததால்", "எகிப்துக்கு போனதால்", "ஏசாவுக்கு பயந்ததால்"], correctAnswer: "தேவனோடும் மனிதரோடும் போராடி ஜெயித்ததால்", sticker: "🪜 Ladder Dreamer", verse: "நீ தேவனோடும் மனிதரோடும் போராடி ஜெயித்தாயே; இனி உன் பெயர் இஸ்ரவேல் எனப்படும். - ஆதியாகமம் 32:28" },
    { id: 55, level: 23, charName: "யாக்கோபு (Jacob)", charPic: "🤼", question: "யாக்கோபு கண்ட சொப்பனத்தின் கனவில் என்ன தெரிந்தது?", options: ["பூமியிலிருந்து வானத்தை முட்டும் ஏணி (Jacob's Ladder)", "பெரிய கப்பல்", "சூரியன் சந்திரன் வணங்குவது", "ஏழு காளைகள்"], correctAnswer: "பூமியிலிருந்து வானத்தை முட்டும் ஏணி (Jacob's Ladder)", sticker: "🪜 Ladder Dreamer", verse: "இதோ, நான் உன்னுடனே இருக்கிறேன்; நீ செய்யும் காரியங்களை வாய்க்கப்பண்ணுவேன். - ஆதியாகமம் 28:15" },
    { id: 56, level: 23, charName: "யாக்கோபு (Jacob)", charPic: "🤼", question: "யாக்கோபுக்கு எத்தனை குமாரர்கள் (மகன்கள்)?", options: ["12 மகன்கள் (12 Tribes)", "10 மகன்கள்", "7 மகன்கள்", "2 மகன்கள்"], correctAnswer: "12 மகன்கள் (12 Tribes)", sticker: "🪜 Ladder Dreamer", verse: "உன் பிள்ளைகளெல்லாரும் கர்த்தரால் போதிக்கப்பட்டிருப்பார்கள்; உன் பிள்ளைகளின் சமாதானம் பெரிதாயிருக்கும். - ஏசாயா 54:13" },

    // 🥣 ESAU
    { id: 57, level: 24, charName: "ஏசா (Esau)", charPic: "🥣", question: "ஏசா தன் சேஷ்ட புத்திர பாக உரிமையை எதற்காக விற்றான்?", options: ["ஒரு கிண்ணம் சிவப்பு பயிற்றங் கஞ்சிக்காக (Lentil Soup)", "நிறைய பொன்னுக்காக", "ஆடுகளுக்காக", "தகப்பன் சொத்துக்காக"], correctAnswer: "ஒரு கிண்ணம் சிவப்பு பயிற்றங் கஞ்சிக்காக (Lentil Soup)", sticker: "🥣 Hunt Companion", verse: "உன் ஆகாரத்திற்காக கவலைப்படாதே; காட்டின் பறவைகளுக்கும் கர்த்தரே ஆகாரமிடுகிறார். - மத்தேயு 6:26" },

    // 👁️ LEAH & RACHEL
    { id: 58, level: 25, charName: "லேயாள் (Leah)", charPic: "👁️", question: "லேயாளின் கண்கள் எப்படி இருந்தன?", options: ["மங்கலாய் / நயனமற்று இருந்தன (Weak eyes)", "பிரகாசமாய் இருந்தன", "கண்ணீர் நிறைந்திருந்தன", "அழகாய் இருந்தன"], correctAnswer: "மங்கலாய் / நயனமற்று இருந்தன (Weak eyes)", sticker: "👁️ Fruitful Vine", verse: "கர்த்தர் என் சிறுமையைப் பார்த்தார்; அவர் என்னை நேசித்தார். - ஆதியாகமம் 29:32" },

    // 🐑 RACHEL
    { id: 59, level: 26, charName: "ராகேல் (Rachel)", charPic: "🐑", question: "ராகேல் ஆரம்பத்தில் என்ன வேலை செய்தாள்?", options: ["தகப்பனின் ஆடுகளை மேய்த்தாள் (Shepherdess)", "விவசாயம்", "துணி நெய்தாள்", "வீட்டு வேலை"], correctAnswer: "தகப்பனின் ஆடுகளை மேய்த்தாள் (Shepherdess)", sticker: "🐑 Beloved Mother", verse: "கர்த்தர் உன்னைத் மேய்த்து, உன் ஆத்துமாவை எப்போதும் நன்மையால் திருப்தியாக்குவார். - ஏசாயா 58:11" },

    // 👑 JOSEPH
    { id: 60, level: 27, charName: "யோசேப்பு (Joseph)", charPic: "👑", question: "யோசேப்பு யாருடைய மகன்?", options: ["யாக்கோபு மற்றும் ராகேலின் மகன்", "ஈசாக்கின் மகன்", "ஆபிரகாமின் மகன்", "நோவாவின் மகன்"], correctAnswer: "யாக்கோபு மற்றும் ராகேலின் மகன்", sticker: "🧥 Dream Interpreter", verse: "யோசேப்போடே கர்த்தர் இருந்தார்; அவன் காரியசித்தியுள்ளவனானான். - ஆதியாகமம் 39:2" },
    { id: 61, level: 27, charName: "யோசேப்பு (Joseph)", charPic: "👑", question: "யோசேப்புக்கு அவனுடைய தகப்பன் என்ன உடையை அன்பின் அடையாளமாகக் கொடுத்தார்?", options: ["வண்ண வஸ்திரம் / வண்ண அங்கி (Coat of Many Colors)", "பட்டு உடை", "சாதாரண அங்கி", "தோல் வஸ்திரம்"], correctAnswer: "வண்ண வஸ்திரம் / வண்ண அங்கி (Coat of Many Colors)", sticker: "🧥 Dream Interpreter", verse: "அவர் இரட்சிப்பின் வஸ்திரங்களை எனக்கு உடுத்தி, நீதியின் சால்வையை எனக்குத் தரித்தார். - ஏசாயா 61:10" },
    { id: 62, level: 28, charName: "யோசேப்பின் சகோதரர்கள் அவனை என்ன செய்தார்கள்?", options: ["குழியில் தள்ளி அடிமைகளாக விற்றார்கள்", "கொன்று போட்டார்கள்", "அன்பாக நடத்தினார்கள்", "துரத்தி விட்டார்கள்"], correctAnswer: "குழியில் தள்ளி அடிமைகளாக விற்றார்கள்", sticker: "🧥 Dream Interpreter", verse: "நீங்கள் எனக்கு விரோதமாகத் தீமை செய்ய நினைத்தீர்கள்; தேவனோ நன்மையாக அதை முடித்தார். - ஆதியாகமம் 50:20" },
    { id: 63, level: 28, charName: "யோசேப்பு எகிப்தில் யாருடைய வீட்டில் வீட்டு அதிகாரியாக வேலை செய்தான்?", options: ["போத்திபார் வீட்டில் (Potiphar)", "பார்வோன் அரண்மனையில்", "சிறைச்சாலையில்", "லாபான் வீட்டில்"], correctAnswer: "போத்திபார் வீட்டில் (Potiphar)", sticker: "🧥 Dream Interpreter", verse: "உன் யோசனைகளையெல்லாம் கர்த்தருக்கு ஒப்புவி; அப்பொழுது உன் காரியங்கள் ஸ்திரப்படும். - நீதிமொழிகள் 16:3" },
    { id: 64, level: 29, charName: "யோசேப்பு எகிப்து தேசத்தில் எந்தப் பதவிக்கு உயர்த்தப்பட்டான்?", options: ["தேசத்தின் பிரதம மந்திரி / அதிபதி (Ruler of Egypt)", "சிறைக்காவலன்", "அரண்மனை காவலாளி", "போர் தளபதி"], correctAnswer: "தேசத்தின் பிரதம மந்திரி / அதிபதி (Ruler of Egypt)", sticker: "👑 Ruler of Egypt", verse: "கர்த்தர் உன்னை வாலாக்காமல் தலையாக்குவார்; நீ கீழாகாமல் மேலாவாய். - உபாகமம் 28:13" },
    { id: 65, level: 29, charName: "யோசேப்பு எத்தனை வயதில் மரணமடைந்தான்?", options: ["110 வருடங்கள்", "120 வருடங்கள்", "100 வருடங்கள்", "90 வருடங்கள்"], correctAnswer: "110 வருடங்கள்", sticker: "👑 Ruler of Egypt", verse: "நீ நெடுநாட்களாய் வாழ்ந்து, கர்த்தருடைய இரட்சிப்பைக் காண்பாய்; உன் சமாதானம் நிலைத்திருக்கும். - சங்கீதம் 91:16" }
  ];

  // --- 2. State Management ---
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [chancesLeft, setChancesLeft] = useState(2);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [unlockedStickers, setUnlockedStickers] = useState([]);
  const [showAdModal, setShowAdModal] = useState(false);
  const [adTimer, setAdTimer] = useState(5);
  const [hasUsedAdRetry, setHasUsedAdRetry] = useState(false);
  const [showLevelSuccessModal, setShowLevelSuccessModal] = useState(false);
  const [completedLevelNum, setCompletedLevelNum] = useState(1);
  const [wrongAnswersCountThisLevel, setWrongAnswersCountThisLevel] = useState(0);

  // compliance pages states
  const [activeModalPage, setActiveModalPage] = useState(null); 

  const currentQ = genesisQuestions[currentQIndex] || genesisQuestions[0];

  // --- 3. Built-in Dynamic Audio Synth Engine ---
  const playSound = (type) => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain); gain.connect(ctx.destination);
      if (type === 'correct') {
        osc.frequency.setValueAtTime(587.33, ctx.currentTime);
        gain.gain.setValueAtTime(0.1, ctx.currentTime);
        osc.start(); osc.frequency.setValueAtTime(880, ctx.currentTime + 0.1);
        osc.stop(ctx.currentTime + 0.25);
      } else if (type === 'wrong') {
        osc.type = 'sawtooth'; osc.frequency.setValueAtTime(150, ctx.currentTime);
        gain.gain.setValueAtTime(0.1, ctx.currentTime); osc.start();
        osc.frequency.linearRampToValueAtTime(80, ctx.currentTime + 0.3);
        osc.stop(ctx.currentTime + 0.35);
      } else if (type === 'levelComplete') {
        [261.63, 329.63, 392.00, 523.25].forEach((freq, idx) => {
          const o = ctx.createOscillator(); const g = ctx.createGain();
          o.connect(g); g.connect(ctx.destination);
          o.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.1);
          g.gain.setValueAtTime(0.1, ctx.currentTime + idx * 0.1);
          g.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + idx * 0.1 + 0.4);
          o.start(ctx.currentTime + idx * 0.1); o.stop(ctx.currentTime + idx * 0.1 + 0.4);
        });
      }
    } catch (e) {}
  };

  // --- 4. Auto-Resume Logic ---
  useEffect(() => {
    const savedQIndex = localStorage.getItem('bible_quiz_q_index');
    const savedStickersRaw = localStorage.getItem('bible_quiz_stickers');
    if (savedQIndex) {
      const idx = parseInt(savedQIndex);
      if (idx < genesisQuestions.length) setCurrentQIndex(idx);
    }
    if (savedStickersRaw) {
      try {
        const parsed = JSON.parse(savedStickersRaw);
        if (parsed.length > 0 && typeof parsed[0] === 'string') {
          localStorage.removeItem('bible_quiz_stickers');
          setUnlockedStickers([]);
        } else {
          setUnlockedStickers(parsed);
        }
      } catch(e) {
        setUnlockedStickers([]);
      }
    }
  }, [genesisQuestions.length]);

  const currentLevelQuestions = genesisQuestions.filter(q => q.level === currentQ.level);
  const lastIndexInLevel = [...genesisQuestions].reverse().find(q => q.level === currentQ.level)?.id;
  const isLastQOfLevel = currentQ.id === lastIndexInLevel;

  // --- 5. Handlers ---
  const handleOptionClick = (option) => {
    if (selectedOption !== null && isCorrect) return;
    setSelectedOption(option);
    const check = option === currentQ.correctAnswer;
    setIsCorrect(check);
    if (check) {
      playSound('correct');
      if (isLastQOfLevel) {
        const stickerObj = {
          name: currentQ.sticker, level: currentQ.level, verse: currentQ.verse,
          charName: currentQ.charName, charPic: currentQ.charPic,
          isPremium: wrongAnswersCountThisLevel === 0
        };
        const updated = [...unlockedStickers.filter(s => s.level !== currentQ.level), stickerObj];
        setUnlockedStickers(updated);
        localStorage.setItem('bible_quiz_stickers', JSON.stringify(updated));
      }
    } else {
      playSound('wrong');
      setChancesLeft(prev => prev - 1);
      setWrongAnswersCountThisLevel(prev => prev + 1);
    }
  };

  const moveToNextQuestion = () => {
    if (currentQIndex < genesisQuestions.length - 1) {
      const nextIdx = currentQIndex + 1;
      setCurrentQIndex(nextIdx);
      localStorage.setItem('bible_quiz_q_index', nextIdx.toString());
      setSelectedOption(null); setIsCorrect(null); setChancesLeft(2); setHasUsedAdRetry(false);
      if (genesisQuestions[nextIdx].level !== currentQ.level) setWrongAnswersCountThisLevel(0);
    } else {
      alert("🔥 மாஸ் ! நீங்க ஆதியாகமம் புத்தகத்தோட 65 கஸ்டம் கேள்விகளையும் வெற்றிகரமா முடிச்சு அல்டிமேட் சாம்பியன் ஆகிட்டீங்க! 🏆");
      handleResetProgress();
    }
  };

  const handleNext = () => {
    if (isCorrect && isLastQOfLevel) {
      playSound('levelComplete');
      setCompletedLevelNum(currentQ.level);
      setShowLevelSuccessModal(true);
    } else {
      moveToNextQuestion();
    }
  };

  const handleWatchAdForRetry = () => {
    setShowAdModal(true); setAdTimer(5);
    const interval = setInterval(() => {
      setAdTimer((prev) => {
        if (prev <= 1) { clearInterval(interval); return 0; }
        return prev - 1;
      });
    }, 1000);
  };

  const handleCloseAdModal = () => {
    setShowAdModal(false);
    setChancesLeft(1);
    setHasUsedAdRetry(true);
    setSelectedOption(null);
    setIsCorrect(null);
  };

  const handleCloseLevelSuccess = () => {
    setShowLevelSuccessModal(false);
    moveToNextQuestion();
  };

  const handleResetProgress = () => {
    if (window.confirm(" உங்களுடைய பழைய கேம் ஸ்கோர் அண்ட் ஸ்டிக்கர் ஆல்பத்தை கம்ப்ளீட்டா அழிச்சிட்டு லெவல் 1-ல இருந்து மறுபடியும் விளையாடணுமா?")) {
      localStorage.removeItem('bible_quiz_q_index');
      localStorage.removeItem('bible_quiz_stickers');
      setCurrentQIndex(0);
      setUnlockedStickers([]);
      setSelectedOption(null);
      setIsCorrect(null);
      setChancesLeft(2);
      setHasUsedAdRetry(false);
      setWrongAnswersCountThisLevel(0);
      window.location.reload();
    }
  };

  // --- 6. HD Canvas Poster Generator ---
  const downloadPremiumSticker = (stickerItem) => {
    const canvas = document.createElement('canvas'); canvas.width = 600; canvas.height = 600;
    const ctx = canvas.getContext('2d');
    
    const grad = ctx.createLinearGradient(0,0,600,600); 
    grad.addColorStop(0, '#121211'); grad.addColorStop(0.5, '#221b0d'); grad.addColorStop(1, '#080808');
    ctx.fillStyle = grad; ctx.fillRect(0,0,600,600); 
    
    ctx.strokeStyle = '#d4af37'; ctx.lineWidth = 8; ctx.strokeRect(20,20,560,560);
    ctx.strokeStyle = '#aa8420'; ctx.lineWidth = 2; ctx.strokeRect(28,28,544,544);
    
    ctx.fillStyle = '#bf7608'; ctx.font = 'bold 15px Arial'; ctx.textAlign = 'center'; 
    ctx.fillText("🏆 100% ACCURACY CHAMPION PROMISE 🏆", 300, 75);
    
    ctx.fillStyle = '#ffffff'; ctx.font = 'bold 34px Times New Roman'; ctx.fillText(stickerItem.name, 300, 150);
    
    ctx.fillStyle = '#888'; ctx.font = '13px Arial'; 
    ctx.fillText(`${stickerItem.charPic} ${stickerItem.charName} STUDY • LEVEL ${stickerItem.level} REWARD`, 300, 190);
    
    ctx.strokeStyle = '#444'; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(100, 220); ctx.lineTo(500, 220); ctx.stroke();
    
    ctx.fillStyle = '#e5d3b3'; ctx.font = 'italic 21px Georgia';
    const words = stickerItem.verse.split(' '); let line = ''; let y = 290;
    words.forEach(w => {
      let testLine = line + w + ' ';
      if (ctx.measureText(testLine).width > 440) { 
        ctx.fillText(line, 300, y); line = w + ' '; y += 36; 
      } else { line = testLine; }
    });
    ctx.fillText(line, 300, y);
    
    ctx.fillStyle = '#d4af37'; ctx.font = 'bold 11px Arial'; 
    ctx.fillText("HOLY BIBLE SCRIPTURE CERTIFICATE", 300, 530);

    const link = document.createElement('a'); 
    link.download = `Premium_Promise_Level_${stickerItem.level}.png`;
    link.href = canvas.toDataURL('image/png'); link.click();
  };

  return (
    <div className="app-container">
      
      {/* 🎮 LEFT PANEL: core game zone */}
      <main className="quiz-section">
        <div style={{ width: '100%', textAlign: 'center', maxWidth: '500px', margin: '0 auto', position:'relative' }}>
          
          {/* Quick Clear Reset Button */}
          <button 
            onClick={handleResetProgress}
            style={{ position: 'absolute', top: '-10px', right: '-10px', padding: '6px 12px', fontSize: '11px', background: '#3a2121', color: '#ff7777', border: '1px solid #773333', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
          >
            Reset 🔄
          </button>

          <h1 style={{ color: 'var(--gold)', fontSize: '26px', margin: '0 0 5px 0' }}>📖 Bible Character Quiz</h1>
          <p style={{ color: 'var(--text-muted)', margin: '0 0 20px 0' }}>ஆதியாகமம் (Genesis) • <span style={{color:'var(--gold)', fontWeight:'bold'}}>Level {currentQ.level}</span></p>
          
          <div style={{ color: '#fff', margin: '10px 0', fontSize: '14px' }}>
            Chances: {[...Array(Math.max(0, chancesLeft))].map((_, i) => <span key={i} style={{ color: '#e91e63', fontSize: '18px' }}>❤️ </span>)}
            {chancesLeft <= 0 && <span style={{ color: '#ff9800', fontWeight: 'bold' }}>No chances left! 💔</span>}
          </div>
          
          <span style={{ backgroundColor: 'var(--gold)', color: '#000', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' }}>
            {currentQ.charPic} {currentQ.charName} • QUESTION {currentLevelQuestions.indexOf(currentQ)+1} / {currentLevelQuestions.length}
          </span>
          
          <h3 style={{ margin: '20px 0', fontSize: '18px', color: '#fff', lineHeight: '1.5' }}>{currentQ.question}</h3>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
            {currentQ.options.map((opt, i) => {
              let style = { padding: '14px', borderRadius: '8px', backgroundColor: '#2a2a2a', color: '#fff', border: '1px solid #444', fontWeight: 'bold', fontSize: '15px', cursor: 'pointer', transition: '0.2s' };
              const done = chancesLeft <= 0 && hasUsedAdRetry;
              if (done) {
                if (opt === currentQ.correctAnswer) { style.backgroundColor = '#2e7d32'; style.borderColor = '#4caf50'; }
                else if (selectedOption === opt) { style.backgroundColor = '#c62828'; style.borderColor = '#f44336'; }
              } else if (selectedOption === opt) {
                style.backgroundColor = isCorrect ? '#2e7d32' : '#c62828';
                style.borderColor = isCorrect ? '#4caf50' : '#f44336';
              }
              return <button key={i} style={style} onClick={() => handleOptionClick(opt)} disabled={(selectedOption && isCorrect) || done}>{opt}</button>
            })}
          </div>
          
          <div style={{ marginTop: '22px' }}>
            {isCorrect && (
              <div>
                <div style={{ color: '#4caf50', fontWeight: 'bold', marginBottom: '10px' }}>🎉 சரியான பதில் மச்சா!</div>
                <button onClick={handleNext} style={{ padding: '12px 25px', backgroundColor: 'var(--gold)', color:'#000', border:'none', borderRadius: '5px', fontWeight: 'bold', cursor:'pointer' }}>
                  {isLastQOfLevel ? "Complete Level ➡️" : "Next Question ➡️"}
                </button>
              </div>
            )}
            {isCorrect === false && chancesLeft === 1 && (
              <div>
                <div style={{ color: '#f44336', fontWeight: 'bold', marginBottom:'10px' }}>❌ தப்பான பதில்! இன்னொரு சான்ஸ் இருக்கு, ட்ரை பண்ணு!</div>
                <button onClick={() => { setSelectedOption(null); setIsCorrect(null); }} style={{ padding: '8px 15px', backgroundColor: '#fff', color:'#000', border:'none', borderRadius:'4px', cursor:'pointer', fontWeight:'bold' }}>Try Again 🔄</button>
              </div>
            )}
            {isCorrect === false && chancesLeft <= 0 && !hasUsedAdRetry && (
              <div style={{ background: '#251c1c', padding: '15px', borderRadius: '8px', border: '1px solid #f44336' }}>
                <p style={{ color: '#f44336', margin: '0 0 10px 0', fontWeight: 'bold' }}>💔 சான்ஸ் முடிந்தது!</p>
                <button onClick={handleWatchAdForRetry} style={{ padding: '10px 18px', backgroundColor: '#ff9800', color: '#fff', border:'none', borderRadius:'5px', fontWeight:'bold', cursor:'pointer' }}>🎬 Watch Ad for Final Chance</button>
                <button onClick={() => setHasUsedAdRetry(true)} style={{ marginLeft: '10px', color: '#bbb', background:'none', border:'none', cursor:'pointer' }}>Reveal 👁️</button>
              </div>
            )}
            {isCorrect === false && chancesLeft <= 0 && hasUsedAdRetry && (
              <button onClick={moveToNextQuestion} style={{ padding: '11px 20px', color: '#fff', background: '#444', border:'none', borderRadius:'5px', cursor:'pointer', fontWeight:'bold' }}>Next Question ➡️</button>
            )}
          </div>
          
          {/* --- ALBUM PORTFOLIO DISPLAY --- */}
          <div style={{ marginTop: '40px', borderTop: '1px solid #333', paddingTop: '20px' }}>
            <h4 style={{ color: 'var(--gold)', margin:'0 0 5px 0' }}>🏆 Sticker Album ({unlockedStickers.length} / 12)</h4>
            <p style={{ fontSize: '11px', color: '#aaa', margin: '0 0 15px 0' }}>100% Accuracy எடுத்தா <b style={{color:'var(--gold)'}}>Premium HD Card</b>, இல்லைனா க்யூட்டான <b style={{color:'#03a9f4'}}>Mini Card</b> கிடைக்கும்! 🎁</p>
            
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
              {unlockedStickers.length === 0 ? (
                <span style={{ fontSize: '12px', color: '#666' }}>லெவல்களை முடித்து கார்டுகளை அன்லாக் செய்!</span>
              ) : (
                unlockedStickers.map((stk, idx) => (
                  <div key={idx} style={{ background: '#1c1c1c', padding: '12px', borderRadius: '8px', border: stk.isPremium ? '1px solid var(--gold)' : '1px solid #03a9f4', width: '135px', textAlign:'center' }}>
                    <div style={{fontSize:'26px', marginBottom:'2px'}}>{stk.charPic}</div>
                    <div style={{color:'#fff', fontSize:'13px', fontWeight:'bold'}}>{stk.charName}</div>
                    <div style={{fontSize:'10px', color: stk.isPremium ? 'var(--gold)' : '#03a9f4', margin:'2px 0 8px 0'}}>{stk.isPremium ? "🔱 Premium HD" : "🌟 Cute Mini"}</div>
                    
                    {stk.isPremium ? (
                      <button onClick={() => downloadPremiumSticker(stk)} style={{fontSize:'10px', background:'var(--gold)', color:'#000', border:'none', padding:'4px 8px', borderRadius:'4px', fontWeight:'bold', cursor:'pointer', width:'100%'}}>📥 HD Frame</button>
                    ) : (
                      <div style={{fontSize:'9px', color:'#ccc', background:'#111', padding:'4px', borderRadius:'4px', minHeight:'35px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                        {stk.verse?.split('-')[0]}
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </main>

      {/* 📺 RIGHT PANEL: ad wrapper sidebar */}
      <aside className="ad-section">
        <div style={{ color: "var(--gold)", fontSize: '12px', marginBottom:'5px' }}>Sponsored Ad</div>
        <div className="video-ad-box"><p style={{ color: '#4caf50', margin:0, fontWeight:'bold' }}>🎬 Video Stream</p></div>
        <p style={{ fontSize: '11px', color: '#888', textAlign: 'center', marginTop: '10px' }}>User quiz விளையாடிக்கிட்டு இருக்கும் போதே பேக்கிரவுண்ட்ல இந்த வீடியோ ஓடி நமக்கு ரெவென்யூ தந்துகிட்டே இருக்கும் மச்சா!</p>
      </aside>

      {/* --- REWARD VIDEO AD MODAL --- */}
      {showAdModal && (
        <div style={{ position: 'fixed', top:0, left:0, width:'100%', height:'100%', backgroundColor:'rgba(0,0,0,0.92)', display:'flex', justifyContent:'center', alignItems:'center', zIndex:3000 }}>
          <div style={{ background: '#1e1e1e', padding: '30px', textAlign:'center', color:'#fff', borderRadius:'10px', border:'1px solid #444', maxWidth:'300px', width:'90%' }}>
            <p style={{fontWeight:'bold'}}>📺 Reward Video Ad Playing...</p>
            {adTimer > 0 ? (
              <p style={{color:'var(--gold)'}}>Unlock chance in {adTimer}s</p>
            ) : (
              <button 
                onClick={handleCloseAdModal} 
                style={{background:'#4caf50', padding:'10px 20px', border:'none', color:'#fff', borderRadius:'4px', fontWeight:'bold', cursor:'pointer'}}
              >
                Claim Chance & Retry
              </button>
            )}
          </div>
        </div>
      )}

      {/* --- LEVEL SUCCESS CELEBRATION MODAL --- */}
      {showLevelSuccessModal && (
        <div style={{ position: 'fixed', top:0, left:0, width:'100%', height:'100%', backgroundColor:'rgba(0,0,0,0.92)', display:'flex', justifyContent:'center', alignItems:'center', zIndex:3000 }}>
          <div style={{ background: '#151515', padding: '40px 25px', textAlign:'center', border: '2px solid var(--gold)', borderRadius:'15px', maxWidth:'400px', width:'90%' }}>
            <div style={{ fontSize: '24px', marginBottom: '10px' }}>✨ ⭐ ✨ 🌟 ✨</div>
            <h2 style={{color:'var(--gold)', margin:'0 0 10px 0'}}>🏆 LEVEL {completedLevelNum} COMPLETED!</h2>
            <p style={{color:'#fff', fontSize:'14px', lineHeight:'1.4'}}>
              {wrongAnswersCountThisLevel === 0 
                ? "🏅 மரண மாஸ்! ஒரு தப்பும் இல்லாம 100% அக்யூரசியோடு ஜெயித்து Premium HD போஸ்டர் கார்டை அன்லாக் பண்ணிட்டீங்க! 🎁" 
                : "🌟 சூப்பர் ! இந்த லெவலை முடிச்சு உங்களுக்கான க்யூட் Mini Character கார்டை அன்லாக் பண்ணிட்டீங்க! 🖼️"
              }
            </p>
            <div style={{ background: '#222', padding: '12px', borderRadius: '8px', margin: '20px 0', textAlign: 'center' }}>
              <span style={{ fontSize: '10px', color: '#ff9800', display: 'block', fontWeight: 'bold' }}>SPONSORED BANNER AD</span>
              <div style={{ color: '#4caf50', fontWeight: 'bold', fontSize: '13px', marginTop: '5px' }}>🚀 50% Offer on Premium Bible Study Kits!</div>
            </div>
            <button 
              onClick={handleCloseLevelSuccess} 
              style={{background:'var(--gold)', color:'#000', border:'none', padding:'12px 25px', marginTop:'20px', fontWeight:'bold', borderRadius:'5px', cursor:'pointer', width:'100%'}}
            >
              Next Level-க்கு போலாம்  🚀
            </button>
          </div>
        </div>
      )}

      {/* --- ADSENSE COMPLIANCE FOOTER & PAGES --- */}
      <footer style={{ gridColumn: '1 / -1', borderTop: '1px solid #222', padding: '15px', textAlign: 'center', fontSize: '12px', color: '#888' }}>
        <span>© 2026 Bible Quiz Web Application. All rights reserved. </span> | 
        <button onClick={() => setActiveModalPage('about')} style={{ background: 'none', border: 'none', color: 'var(--gold)', cursor: 'pointer', margin: '0 8px' }}>About Us</button> | 
        <button onClick={() => setActiveModalPage('privacy')} style={{ background: 'none', border: 'none', color: 'var(--gold)', cursor: 'pointer', margin: '0 8px' }}>Privacy Policy</button> | 
        <button onClick={() => setActiveModalPage('terms')} style={{ background: 'none', border: 'none', color: 'var(--gold)', cursor: 'pointer', margin: '0 8px' }}>Terms & Conditions</button>
      </footer>

      {/* Dynamic Popups for Compliance pages */}
      {activeModalPage && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.95)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 4000, padding: '20px' }}>
          <div style={{ backgroundColor: '#141414', border: '1px solid var(--gold)', borderRadius: '12px', padding: '30px', maxWidth: '600px', width: '100%', maxHeight: '80vh', overflowY: 'auto', color: '#eee', textAlign: 'left', fontSize: '14px', lineHeight: '1.6' }}>
            
            {activeModalPage === 'about' && (
              <div>
                <h2 style={{ color: 'var(--gold)' }}>About Us</h2>
                <p>வரவேற்கிறோம் ! இது உலகத்தரம் வாய்ந்த, விளையாட்டு மற்றும் கல்வி சார்ந்த ஒரு அல்டிமேட் <b>Bible Character Quiz</b> வெப்சைட் ஆகும்.</p>
                <p>எங்களுடைய நோக்கம் பைபிள் வரலாற்று சம்பவங்களை எளிய முறையில், நவீன கேமிங் அனிமேஷன் மற்றும் தூண்டுதல் வாக்குத்தத்த வசனங்களோடு (Promise Verses) அனைவருக்கும் கொண்டு சேர்ப்பதாகும். உங்கள் ஞானம் பெருக எங்களோடு தொடர்ந்து விளையாடுங்கள்!</p>
              </div>
            )}

            {activeModalPage === 'privacy' && (
              <div>
                <h2 style={{ color: 'var(--gold)' }}>Privacy Policy</h2>
                <p>எங்களுடைய வெப்சைட் பயனர்களின் பிரத்தியேக தனிப்பட்ட தரவுகளை சேகரிக்காது. கேம் விளையாடும் ஸ்கோர் மற்றும் ஆல்பம் கார்டுகள் அனைத்தும் உங்கள் பிரவுசரின் <b>LocalStorage</b>-ல் மட்டுமே பாதுகாப்பாக சேமிக்கப்படும்.</p>
                <p>நாங்கள் கூகுள் அட்சென்ஸ் (Google AdSense) போன்ற தேர்டு பார்ட்டி விளம்பர நெட்வொர்க்குகளைப் பயன்படுத்துகிறோம். இவை பயனர்களின் பிரவுசிங் அனுபவத்திற்கு ஏற்றவாறு குக்கீஸ்களை (Cookies) பயன்படுத்தி பாதுகாப்பான விளம்பரங்களை வழங்கலாம்.</p>
              </div>
            )}

            {activeModalPage === 'terms' && (
              <div>
                <h2 style={{ color: 'var(--gold)' }}>Terms & Conditions</h2>
                <p>இந்த வெப்சைட் கம்ப்ளீட் இலவச பயன்பாட்டிற்கு மட்டுமே உருவாக்கப்பட்டுள்ளது. இதில் உள்ள கேள்விகள், ஆடியோக்கள் மற்றும் டவுன்லோடபிள் போஸ்டர்களை வணிக ரீதியாக விற்க அனுமதி இல்லை.</p>
                <p>எங்கள் குவிஸ் மென்பொருளை எந்தவொரு தவறான அல்லது ஹேக்கிங் முறையிலும் பயன்படுத்தக்கூடாது என்று கேட்டுக்கொள்ளப்படுகிறது. விதிகளை மீறினால் LocalStorage டேட்டா ஆட்டோமேட்டிக்காக ரீசெட் செய்யப்படலாம்.</p>
              </div>
            )}

            <button 
              onClick={() => setActiveModalPage(null)} 
              style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: 'var(--gold)', color: '#000', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', width: '100%' }}
            >
              Close Page ❌
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;

