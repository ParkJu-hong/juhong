import React from 'react';
import './App.css';
import { dummyTweets } from './static/dummyData';
// ! 위 코드는 수정하지 않습니다.
console.log(dummyTweets) // 개발 단계에서 사용하는 더미 데이터입니다.

const Sidebar = () => {
  return (
    <section className="sidebar">
      <i className="far fa-comment-dots"></i>
    </section>
  );
};
const tweetLength = dummyTweets.length;
const Counter = () => {
  return (
    <div className="tweetForm__input">
      <div className="tweetForm__inputWrapper">
        <div className="tweetForm__count" role="status">
          Total : {tweetLength}
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return <footer>Copyright © 2021 Code States</footer>;
};

// const parkhackerColor{
//   background-color :
// }

const Tweets = () => {
  return (
    <ul className="tweets">
      {dummyTweets.map((tweet) => {
        const parsedDate = new Date(tweet.createdAt).toLocaleDateString(
          'ko-KR'
        );

        const isParkHacker = tweet.username === 'parkhacker';
        const tweetUserNameClass = isParkHacker
  ? 'tweet__username tweet__username--purple'
  : 'tweet__username';

        return (
          <li className="tweet" key={tweet.id}>
            <div className="tweet__profile">
              <img src={tweet.picture}></img>
            </div>
            <div className="tweet__content">
              <div className="tweet__userInfo">
                <span className={tweetUserNameClass}>{tweet.username}</span>
                <span className="tweet__createdAt">{parsedDate}</span>
              </div>
              <div className="tweet__message">{tweet.content}</div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
const Features = () => {
  return (
    <section className="features">
      <div className="tweetForm__container">
        <div className="tweetForm__wrapper">
          <div className="tweetForm__profile"></div>
          <Counter />
        </div>
      </div>
      <Tweets />
      <Footer />
    </section>
  );
};

const App = () => {
  return (
    <div className="App">
      <main>
        <Sidebar />
        <Features />
      </main>
    </div>
  );
};

// ! 아래 코드는 수정하지 않습니다.
export { App, Sidebar, Counter, Tweets, Features, Footer };
