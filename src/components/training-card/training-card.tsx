
import { PopupKey } from '../../consts';
import {
  BuyForm,
  Popup,
} from '../../components';
function TrainingCard(): JSX.Element {
  const isActive = true;
  let activePopup = PopupKey.DefaultPopup;

  const handleBuyButtonClick = (): void => {
    activePopup = PopupKey.Buy;
    //dispatch(setBuyForm({ trainingId: trainingId, price: Number(price) }));
    //dispatch(setActivePopup(PopupKey.Buy));
    <Popup type={PopupKey.Buy} title="Купить тренировку" activePopup={activePopup}>
      <BuyForm />
    </Popup>;
  };

  return (
    <div className="training-card">
      <div className="training-info">
        <h2 className="visually-hidden">Информация о тренировке</h2>
        <div className="training-info__header">
          <div className="training-info__coach">
            <div className="training-info__photo">
              <picture>
                <source
                  type="image/webp"
                  srcSet="img/content/avatars/coaches//photo-1.webp, img/content/avatars/coaches//photo-1@2x.webp 2x"
                />
                <img
                  src="img/content/avatars/coaches//photo-1.png"
                  srcSet="img/content/avatars/coaches//photo-1@2x.png 2x"
                  width={64}
                  height={64}
                  alt="Изображение тренера"
                />
              </picture>
            </div>
            <div className="training-info__coach-info">
              <span className="training-info__label">Тренер</span>
              <span className="training-info__name">Валерия</span>
            </div>
          </div>
        </div>
        <div className="training-info__main-content">
          <form action="#" method="get">
            <div className="training-info__form-wrapper">
              <div className="training-info__info-wrapper">
                <div className="training-info__input training-info__input--training">
                  <label>
                    <span className="training-info__label">
                      Название тренировки
                    </span>
                    <input
                      type="text"
                      name="training"
                      defaultValue="energy"
                      disabled={isActive}
                    />
                  </label>
                  <div className="training-info__error">Обязательное поле</div>
                </div>
                <div className="training-info__textarea">
                  <label>
                    <span className="training-info__label">
                      Описание тренировки
                    </span>
                    <textarea
                      name="description"
                      defaultValue={
                        'Упражнения укрепляют мышечный корсет, делают суставы более гибкими, улучшают осанку и координацию.'
                      }
                      disabled={isActive}
                    />
                  </label>
                </div>
              </div>
              <div className="training-info__rating-wrapper">
                <div className="training-info__input training-info__input--rating">
                  <label>
                    <span className="training-info__label">Рейтинг</span>
                    <span className="training-info__rating-icon">
                      <svg width={18} height={18} aria-hidden="true">
                        <use xlinkHref="#icon-star" />
                      </svg>
                    </span>
                    <input
                      type="number"
                      name="rating"
                      defaultValue={4}
                      disabled={isActive}
                    />
                  </label>
                </div>
                <ul className="training-info__list">
                  <li className="training-info__item">
                    <div className="hashtag hashtag--white">
                      <span>#пилатес</span>
                    </div>
                  </li>
                  <li className="training-info__item">
                    <div className="hashtag hashtag--white">
                      <span>#для_всех</span>
                    </div>
                  </li>
                  <li className="training-info__item">
                    <div className="hashtag hashtag--white">
                      <span>#320ккал</span>
                    </div>
                  </li>
                  <li className="training-info__item">
                    <div className="hashtag hashtag--white">
                      <span>#30_50минут</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="training-info__price-wrapper">
                <div className="training-info__input training-info__input--price">
                  <label>
                    <span className="training-info__label">Стоимость</span>
                    <input
                      type="text"
                      name="price"
                      defaultValue="800 ₽"
                      disabled={isActive}
                    />
                  </label>
                  <div className="training-info__error">Введите число</div>
                </div>
                <button
                  className="btn training-info__buy"
                  type="button"
                  onClick={handleBuyButtonClick}
                >
                  Купить
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="training-video">
        <h2 className="training-video__title">Видео</h2>
        <div className="training-video__video">
          <div className="training-video__thumbnail">
            <picture>
              <source
                type="image/webp"
                srcSet="img/content/training-video/video-thumbnail.webp, img/content/training-video/video-thumbnail@2x.webp 2x"
              />
              <img
                src="img/content/training-video/video-thumbnail.png"
                srcSet="img/content/training-video/video-thumbnail@2x.png 2x"
                width={922}
                height={566}
                alt="Обложка видео"
              />
            </picture>
          </div>
          <button className="training-video__play-button btn-reset">
            <svg width={18} height={30} aria-hidden="true">
              <use xlinkHref="#icon-arrow" />
            </svg>
          </button>
        </div>
        <div className="training-video__buttons-wrapper">
          <button
            className="btn training-video__button training-video__button--start"
            type="button"
            disabled={isActive}
          >
            Приступить
          </button>
          <button
            className="btn training-video__button training-video__button--stop"
            type="button"
          >
            Закончить
          </button>
        </div>
      </div>
    </div>
  );
}

export default TrainingCard;
