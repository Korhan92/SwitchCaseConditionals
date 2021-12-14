let johnage = 19;
let johnjob = 'yazılımcı';
if (johnage >= 18) { console.log('bira içebilir') }
else {
    console.log('meyve suyu içebilir')
} // if ile karşılaştırma yaptık.
johnage >= 18 ? console.log('bira içebilir') : console.log('meyve suyu içebilir')// üçlü operatörle karşılaştırma yaptık.
johnage = 40
switch (true) {
    case johnage < 13:
        console.log('john çocuk')

        break;
    case johnage <= 20:
        console.log('john gençtir')
        break;
    case johnage <= 30:
        console.log('yetişkin')
        break;

    default: console.log('yaşlıdır')
        break;
}
johnjob = 'kaportacı'
switch (johnjob) {
    case 'yazılımcı': console.log(`john ${johnjob}`)
        break;

    case 'öğretmen': console.log(`john ${johnjob}`)


        break;
    case 'doktor': console.log(`john ${johnjob}`)
        break;


    default: console.log('işsiz')
        break;
}



