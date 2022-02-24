import Reactg from 'react';
import { Redirect } from 'react-router-dom';
import { GameItem } from '../../components/game/game-item';
import { useAuth } from '../../components/hooks/useAuth';
import './home-page.css';
const GAMES = [
    {
        image: '/game-covers/warcraft3-reforged.jpg',
        title: 'Warcraft III: Reforged',
        video: 'https://www.youtube.com/embed/oDZqQTnh5Hk',
        genres: ['Компьютерная ролевая игра', 'Стратегия'],
        price: 33,
        id: 0,
        description: 'Warcraft III: Reforged представляет собой обновлённую версию Warcraft III: Reign of Chaos и дополнения к ней The Frozen Throne. Она сохраняет тот же геймплей, сюжет и в целом ту же структуру уровней, что и в оригинальных играх; основными отличиями являются обновлённая графика в формате Ultra HD, вновь записанный звук и улучшенная сетевая поддержка..'
    },
    {
        image: '/game-covers/call-of-Duty.webp',
        title: 'Call of Duty: Vanguard',
        video: 'https://www.youtube.com/embed/n7c8D47nwHQ',
        genres: ['Экшен', 'Шутер'],
        price: 43,
        id: 1,
        description: 'Cерия компьютерных игр в жанре шутера от первого лица, выпускаемая американской компанией Activision. Разработкой игр серии занимались такие студии, как Infinity Ward, Treyarch и Sledgehammer Games. Ранние игры серии, начиная с самой первой игры 2003 года, были посвящены Второй мировой войне; в дальнейшем в рамках серии выходили и игры, действие которых разворачивалось во времена холодной войны, в недалёком будущем, даже в космосе. Отдельные игры серии, объединённые общим временем действия, связаны друг с другом также повествованием и персонажами.'
    },
    {
        image: '/game-covers/Skyrim.jpg',
        title: 'The Elder Scrolls 5: Skyrim',
        video: 'https://www.youtube.com/embed/JSRtYpNRoN0',
        genres: ['Экшен', 'Открытый мир', 'РПГ'],
        price: 28,
        id: 2,
        description: 'The Elder Scrolls V: Skyrim — мультиплатформенная компьютерная ролевая игра с открытым миром, разработанная студией Bethesda Game Studios и выпущенная компанией Bethesda Softworks. Это пятая часть в серии The Elder Scrolls.'
    },
    {
        image: '/game-covers/forza_5.jpeg',
        title: 'Forza Horizon 5',
        genres: ['Гонки', 'Симулятор', 'Открытый мир'],
        price: 31,
        video: 'https://www.youtube.com/embed/FYH9n37B7Yw',
        id: 3,
        description: "Вас ждёт бесконечный калейдоскоп приключений Horizon! Совершайте увлекательные поездки по невероятно красивому и самобытному миру Мексики за рулём величайших автомобилей в истории. Начните своё приключение Horizon уже сегодня, добавив игру в свой список желаний!",
    },
    {
        image: '/game-covers/battlefield_2042.jpg',
        title: 'Battlefield 2042',
        genres: ['Экшен', 'Шутер', 'Война'],
        video: 'https://www.youtube.com/embed/ASzOzrB-a9E',
        price: 35,
        id: 4,
        description: 'Battlefield™ 2042 — это шутер от первого лица, в котором серия возвращается к легендарным масштабным сражениям. В будущем, где царит хаос, адаптируйтесь и процветайте на постоянно меняющихся полях боя благодаря своему отряду и арсеналу новейших технологий.'
    },
    {
        image: '/game-covers/life_is_strange_true_colors.jpeg',
        title: 'Life is Strange True Colors',
        genres: ['Глубокий сюжет', 'Протагонистка'],
        video: 'https://www.youtube.com/embed/b6CkzwVAr0M',
        price: 42,
        id: 5,
        description: 'Алекс Чэнь от всех скрывает своё «проклятие» — сверхъестественную способность считывать сильные эмоции других и влиять на них. Но когда её брат погибает — якобы в результате несчастного случая, — Алекс использует её, чтобы узнать правду.'
    },
    {
        image: '/game-covers/gta_v.jpeg',
        title: 'Grand Theft Auto V',
        genres: ['Открытый мир', 'Экшен'],
        video: 'https://www.youtube.com/embed/QkkoHAzjnUs',
        price: 11,
        id: 6,
        description: 'Grand Theft Auto V для PC позволяет игрокам исследовать знаменитый мир Лос-Сантоса и округа Блэйн в разрешении до 4k и выше с частотой 60 кадров в секунду.'
    },
    {
        image: '/game-covers/rainbow_siege.jpeg',
        title: 'Tom Clancy\'s Rainbow Six® Siege',
        video: 'https://www.youtube.com/embed/6wlvYh0h63k',
        genres: ['Тактика', 'Шутер'],
        price: 14,
        id: 7,
        description: 'Tom Clancy\'s Rainbow Six Осада – это продолжение нашумевшего шутера от первого лица, разработанного студией Ubisoft Montreal.'
    },
    {
        image: '/game-covers/assassins_creed_valhalla.png',
        title: 'Assassin’s Creed Valhalla',
        genres: ['Паркур', 'РПГ', 'Открытый мир'],
        video: 'https://www.youtube.com/embed/ssrNcwxALS4',
        price: 30,
        id: 8,
        description: 'Assassin’s Creed Valhalla — мультиплатформенная компьютерная игра в жанре action/RPG, разработанная студией Ubisoft Montreal под издательством компании Ubisoft. Является двенадцатой игрой в серии игр Assassin’s Creed.'
    },
    {
        image: '/game-covers/crysis.webp',
        title: 'Crysis 3',
        genres: ['Экшен', 'Открытый мир'],
        video: 'https://www.youtube.com/embed/Jvs8tv4lh9M',
        price: 28,
        id: 9,
        description: 'Crysis 3 — мультиплатформенная компьютерная игра, научно-фантастический шутер от первого лица, разработанный немецкой компанией Crytek и изданный Electronic Arts. Игра вышла 19 февраля 2013 года в США, 21 февраля 2013 года в Европе для платформ ПК, Xbox 360 и PlayStation 3. Crysis 3 использует игровой движок собственной разработки Crytek — CryEngine 3, и является второй вышедшей игрой на этом движке. Crysis 3 является продолжением игры Crysis 2. Официально игра была анонсирована 16 апреля 2012 года.'
    },
    {
        image: '/game-covers/sniper.jpg',
        title: 'Sniper: Ghost Warrior 3',
        genres: ['Глубокий сюжет', 'Открытый мир', 'Шутер'],
        video: 'https://www.youtube.com/embed/iWW--jTMN0k',
        price: 25,
        id: 10,
        description: 'Действие игры разворачивается в наши дни, и основывается на серии локальных конфликтов между тремя враждебными фракциями. Несколько крупных государств умело разжигают военные конфликты, впоследствии перерастающие в настоящую гражданскую войну в Грузии. Конфликт развивается и грозит перерасти в, без малого, очередную холодную войну между крупнейшими мировыми державами, а возможно — перейти к третьей мировой войне. Чтобы не допустить подобного развития событий, игрок должен сделать все возможное в роли отставного американского военного. Снайпер Корпуса морской пехоты США в отставке, Джонатан Норт, пробирается в Грузию, чтобы найти и ликвидировать человека, с которым связаны не самые приятные воспоминания. Прошлое постоянно напоминает о себе, и немалую часть в нём занимает тот, кто сейчас принимает непосредственное участие в грузинских событиях — а когда-то был частью того периода жизни Джонатана, о котором он старается не вспоминать.'
    },
    {
        image: '/game-covers/The_Witcher_3.jpg',
        title: 'The Witcher 3: Wild Hunt',
        genres: ['Открытый мир', 'Action/RPG', 'Файтинг'],
        video: 'https://www.youtube.com/embed/A-mCKNTU_mU',
        price: 37,
        id: 11,
        description: 'Действие игры происходит на Большой земле — фантастическом мире, окружённом параллельными измерениями и безмерными вселенными, в которых бок о бок живут люди, эльфы, краснолюды и множество видов чудовищ, хотя нелюди (представители любых рас, кроме человеческой) регулярно сталкиваются с гонениями. На момент событий игры Большая земля является свидетелем масштабной войны между Нильфгаардом, государством на юге во главе с императором Эмгыром вар Эмрейсом, и Реданией, государством на севере, которым правит король Радовид V. Главный герой посещает в течение игры множество мест, имеющих различную атмосферу: богатые города Новиград и Оксенфурт; опустошённые просторы «ничейной земли» Велен и болота на её юге; императорскую резиденцию в столице Темерии, Вызиме; архипелаг Скеллиге, имеющий отчётливые черты государств викингов, и ведьмачью крепость Каэр Морхен.'
    },
]

export function HomePage() {
    const { isAuth } = useAuth();
    
    return  isAuth ? (
            <div className='home-page'> 
                { GAMES.map(game => <GameItem game={ game } key={ game.name }/> )}
            </div>
        ) : (
            <Redirect to='/login' />
            )
}
