import React, { useState, useEffect } from 'react';

const wordsWithHints = [
  {
    word: 'bilgisayar',
    hint: 'Veri işlemek için kullanılan elektronik bir cihaz',
  },
  {
    word: 'yazılım',
    hint: 'Bilgisayarın çalışmasını sağlayan programlar bütünü',
  },
  {
    word: 'algoritma',
    hint: 'Bir problemi çözmek için izlenen adımlar dizisi',
  },
  {
    word: 'veritabanı',
    hint: 'Düzenli bir şekilde depolanan veri koleksiyonu',
  },
  {
    word: 'degisken',
    hint: 'Bir veri saklama alanına verilen isim',
  },
  {
    word: 'fonksiyon',
    hint: 'Yeniden kullanılabilir bir kod bloğu',
  },
  {
    word: 'arayüz',
    hint: 'İki sistemin birbiriyle etkileşime girdiği nokta',
  },
  {
    word: 'cozumleme',
    hint: 'Bir problemi detaylı şekilde inceleme süreci',
  },
  {
    word: 'hata ayıklama',
    hint: 'Yazılımdaki hataları bulma ve düzeltme işlemi',
  },
  {
    word: 'cerceve',
    hint: 'Yazılım geliştirme için kullanılan bir platform',
  },
  {
    word: 'dongu',
    hint: 'Bir işlemi belirli bir koşul sağlanana kadar tekrar etme',
  },
  {
    word: 'sinif',
    hint: 'Nesne yönelimli programlamada bir yapı taşını temsil eder',
  },
  {
    word: 'nesne',
    hint: 'Veri ve işlevleri bir arada tutan programlama yapısı',
  },
  {
    word: 'kapsulleme',
    hint: 'Veri ve işlevlerin bir nesnede gizlenmesi işlemi',
  },
  {
    word: 'miras alma',
    hint: 'Bir sınıfın başka bir sınıftan özellikler alması',
  },
  {
    word: 'polimorfizm',
    hint: 'Farklı veri tiplerinin aynı işlevi gerçekleştirme yeteneği',
  },
  {
    word: 'girdi',
    hint: 'Bir programa veya cihaza gönderilen bilgi',
  },
  {
    word: 'cikti',
    hint: 'Bir programın veya cihazın ürettiği bilgi',
  },
  {
    word: 'isletim sistemi',
    hint: 'Bilgisayar donanımını ve yazılımını yöneten sistem',
  },
  {
    word: 'ag',
    hint: 'Bilgisayarların birbirine bağlı olduğu sistem',
  },
  {
    word: 'internet',
    hint: 'Dünya çapında birbirine bağlı ağların oluşturduğu sistem',
  },
  {
    word: 'tarayıcı',
    hint: 'Web sayfalarını görüntülemek için kullanılan yazılım',
  },
  {
    word: 'bulut',
    hint: 'Veri ve hizmetlerin internet üzerinden sunulduğu altyapı',
  },
  {
    word: 'makine ögrenmesi',
    hint: 'Veriden öğrenme ve tahmin yapma teknolojisi',
  },
  {
    word: 'yapay zeka',
    hint: 'Bilgisayarların insan benzeri davranışlar sergilemesi',
  },
  {
    word: 'sifreleme',
    hint: 'Veriyi güvenli hale getirmek için uygulanan yöntem',
  },
  {
    word: 'sunucu',
    hint: 'Veri ve hizmetleri sağlayan bilgisayar sistemi',
  },
  {
    word: 'istemci',
    hint: 'Sunucudan hizmet talep eden cihaz veya program',
  },
  {
    word: 'protokol',
    hint: 'Ağdaki iletişim kurallarını tanımlayan sistem',
  },
  {
    word: 'adresleme',
    hint: 'Bir cihazın ağ üzerindeki yerini belirleme süreci',
  },
  {
    word: 'islemci',
    hint: 'Bilgisayarın merkezi işlem birimi',
  },
  {
    word: 'hafiza',
    hint: 'Bilgisayarın veri depolama alanı',
  },
  {
    word: 'dosya',
    hint: 'Bilgisayar ortamında saklanan veri birimi',
  },
  {
    word: 'kayıt',
    hint: 'Veritabanındaki bir veri satırı veya girdi',
  },
  {
    word: 'taraf',
    hint: 'Bir ağ protokolünde yer alan iki uçtan biri',
  },
  {
    word: 'anahtar',
    hint: 'Şifreleme işleminde kullanılan gizli bilgi',
  },
  {
    word: 'blokzincir',
    hint: 'Veri bloklarının zincir şeklinde birleştirildiği yapı',
  },
  {
    word: 'kapsam',
    hint: 'Bir değişkenin erişilebilir olduğu kod bölgesi',
  },
  {
    word: 'komut',
    hint: 'Bilgisayara ne yapacağını söyleyen bir ifade',
  },
  {
    word: 'yonlendirme',
    hint: 'Ağ trafiğinin doğru hedefe ulaşmasını sağlama',
  },
  {
    word: 'dugum',
    hint: 'Bir ağdaki cihaz veya bağlantı noktası',
  },
  {
    word: 'islem',
    hint: 'Bir programın çalışan bir örneği',
  },
  {
    word: 'bellek yönetimi',
    hint: 'Bilgisayarın belleğinin verimli kullanılması',
  },
  {
    word: 'islemci cekirdegi',
    hint: 'Bir işlemcinin veri işleme yeteneğine sahip parçası',
  },
  {
    word: 'katman',
    hint: 'Ağ yapısında her bir görev için tanımlanmış seviye',
  },
  {
    word: 'onbellek',
    hint: 'Sık kullanılan verilere hızlı erişim sağlamak için kullanılan bellek',
  },
  {
    word: 'zamanlayıcı',
    hint: 'Bir programın çalışmasını belirli aralıklarla tetikleyen yapı',
  },
  {
    word: 'baglam',
    hint: 'Bir olayın ya da işlemin gerçekleştiği koşullar bütünü',
  },
  {
    word: 'derleyici',
    hint: 'Kaynak kodunu makine diline çeviren program',
  },
  {
    word: 'yorumlayıcı',
    hint: 'Kod satırlarını tek tek çalıştıran program',
  },
];

const hangmanImages = [
  '  +---+\n  |   |\n      |\n      |\n      |\n      |\n=========\n',
  '  +---+\n  |   |\n  O   |\n      |\n      |\n      |\n=========\n',
  '  +---+\n  |   |\n  O   |\n  |   |\n      |\n      |\n=========\n',
  '  +---+\n  |   |\n  O   |\n /|   |\n      |\n      |\n=========\n',
  '  +---+\n  |   |\n  O   |\n /|\\  |\n      |\n      |\n=========\n',
  '  +---+\n  |   |\n  O   |\n /|\\  |\n /    |\n      |\n=========\n',
  '  +---+\n  |   |\n  O   |\n /|\\  |\n / \\  |\n      |\n=========\n',
];

const Hangman = () => {
  const [selectedWordObj, setSelectedWordObj] = useState({
    word: '',
    hint: '',
  });
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    resetGame();
  }, []);

  const resetGame = () => {
    const randomWordObj =
      wordsWithHints[Math.floor(Math.random() * wordsWithHints.length)];
    setSelectedWordObj(randomWordObj);
    setGuessedLetters([]);
    setWrongGuesses(0);
    setGameOver(false);
    setWon(false);
    setShowHint(false);
  };

  const handleGuess = (letter) => {
    if (!guessedLetters.includes(letter) && !gameOver) {
      const newGuessedLetters = [...guessedLetters, letter];
      setGuessedLetters(newGuessedLetters);

      if (!selectedWordObj.word.includes(letter)) {
        const newWrongGuesses = wrongGuesses + 1;
        setWrongGuesses(newWrongGuesses);
        setShowHint(true);
        if (newWrongGuesses >= 6) {
          setGameOver(true);
        }
      } else {
        const isWordGuessed = selectedWordObj.word
          .split('')
          .every((char) => newGuessedLetters.includes(char));
        if (isWordGuessed) {
          setGameOver(true);
          setWon(true);
        }
      }
    }
  };

  const renderWord = () => {
    return selectedWordObj.word.split('').map((letter, index) => (
      <span key={index} className="text-3xl font-bold mx-1">
        {guessedLetters.includes(letter) ? letter : '_'}
      </span>
    ));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white bg-gray-700 p-4">
      <h1 className="text-4xl font-bold mb-6">Adam Asmaca</h1>
      <div className="mb-6">
        <pre className="text-xl font-mono">{hangmanImages[wrongGuesses]}</pre>
      </div>
      <div className="mb-6 flex">{renderWord()}</div>
      <div className="text-xl mb-6">Yanlis Tahmin: {wrongGuesses}/6</div>
      {showHint && (
        <div className="text-lg mb-6 text-yellow-300">
          Ipucu: {selectedWordObj.hint}
        </div>
      )}
      <div className="grid grid-cols-12 gap-2 mb-6">
        {Array.from('abcdefghijklmnopqrstuvwxyz').map((letter) => (
          <button
            key={letter}
            className={`relative bg-purple-700 text-white px-4 py-2 text-lg rounded hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${
              guessedLetters.includes(letter)
                ? 'opacity-50 cursor-not-allowed'
                : ''
            }`}
            onClick={() => handleGuess(letter)}
            disabled={guessedLetters.includes(letter) || gameOver}
          >
            {letter}
            {guessedLetters.includes(letter) && (
              <span className="absolute inset-0 flex items-center justify-center text-red-600 font-bold text-2xl">
                X
              </span>
            )}
          </button>
        ))}
      </div>
      {gameOver && (
        <div className="text-center">
          <p className="text-2xl font-bold mb-4">
            {won ? 'Congratulations! You won!' : 'Game Over. You lost!'}
          </p>
          <p className="text-xl mb-4">Dogru Kelime: {selectedWordObj.word}</p>
          <button
            className="bg-green-500 text-white px-6 py-3 text-lg rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            onClick={resetGame}
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
};

export default Hangman;
