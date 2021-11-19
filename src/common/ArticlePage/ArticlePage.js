import React from "react";

import camera from "../../images/articlePage/camera.png";
import equipment from "../../images/articlePage/equipment.png";

import "./ArticlePage.css";

const ArticlePage = () => {
  return (
    <div className="articlePage">
      <h2>
        ДВУХДИАПАЗОННАЯ 2.4/5 ГГЦ УЛИЧНАЯ WI-FI IP КАМЕРА REOLINK RLC-511W С
        ЗУМОМ
      </h2>
      <div className="articlePage-about">
        <p>
          Высоко сижу - далеко гляжу! А еще очень хорошо вижу! Сегодня у нас на
          обзоре Reolink, товарищи. Да еще и не просто что-то там, а одна из
          лучших камер в их линейке - двухдиапазонная уличная Wi-Fi IP камера
          Reolink RLC-511W. Нечего греха таить - это наш любимчик! Те, кто
          следят за нами давно, знают, что мы неравнодушны к производителю
          Reolink и нам никогда не лень делать обзоры на их камеры.
        </p>

        <p>
          Но фишка этой вызывает поистине любовную любовь – разрешение 5 Мп и
          4-х кратный оптический зум! Как вы уже поняли, главной жирной фишкой
          этой камеры видеонаблюдения есть 5 Мп матрица, которая в 2,5 раза
          превышает разрешение 1080p Full HD. Потому видео выходит супер чётким,
          насыщенным, цветным и детализированным.
        </p>

        <img src={camera} alt="camera" />

        <p>Другой не менее жирной фишкой есть наличие 4-х кратного оптического зума, который помогает видеть дальше и больше, а качество при этом не страдает! Еще тут есть объектив с автофокусировкой и углом обзора от 31 до 90 градусов по горизонтали. Работать она может с Wi-Fi диапазонами 2.4 ГГц и 5 ГГц. Антенны достаточно мощные, поэтому сигнал крепкий. У камеры естественно есть и ночная подсветка до 30 метров, которая дает хорошую видимость, когда на улице темно.</p>
      </div>

      <div className="articlePage-equipment">
        <h2>Комплектация</h2>

        <p>
          Благодаря датчику движения, который есть внутри, можно получать
          мгновенные Push-уведомления о том, например, что на вашей территории
          находится посторонний человек. А благодаря доступу к Life-видео, можно
          сразу посмотреть кто это и что он там делает. Вот, что входит в
          комплектацию к камере:
        </p>

        <img src={equipment} alt="equipment" />

        <p>
          Весь отснятый материал может храниться на карте памяти или
          регистраторе. Производитель говорит, что карта должна быть на 64 Гб,
          но, как показывает практика, можно взять и 128 Гб. Главное, чтобы
          карта была качественная. Управлять данной камерой можно при помощи
          мобильного приложения Reolink для IOS и Android.
        </p>
      </div>
    </div>
  );
};

export default ArticlePage;
