import React from "react";

const Home = () => {
  return (
    <div id="home-page">
      <div className="content">
        <div className="content-text">
          <h3>What is Spartacus?</h3>
          <p>
            Spartacus is a modular cognitive system used by the AD Cloud to
            extract deep insights, often in real-time, from asset, operational
            and external data sources. It is a key part of AD Cloud’s autonomous
            UAV initiative.
          </p>
          <p>
            A natural language processing (NLP) digital agent with deep neural
            learning abilities and a modular architecture, Spartacus can learn
            specialized skills, developed on a case by case basis.
          </p>
        </div>
        <div className="content-img">
          <img src="/static/sparticusimg1.png" alt="image1" />
        </div>
      </div>
      <div className="content">
        <div className="content-img">
          <img src="/static/sparticusimg2.png" alt="image1" />
        </div>
        <div className="content-text">
          <h3>How it Works</h3>
          <p>
            Spartacus is based on neural networks, hence the ability for deep
            learning. By employing its algorithms in a modular fashion,
            Spartacus can learn different types of skills, providing valuable
            insights to many industries.
          </p>
          <p>
            The outcome? More valuable insights in less time from complex data
            with ever-increasing efficiency. However, it’s important that
            Spartacus is given the right sets of data and not ‘kept in the
            dark’.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
