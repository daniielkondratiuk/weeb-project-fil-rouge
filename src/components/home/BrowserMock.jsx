export default function BrowserMock({ className = "", address = "app.weeb.ai", size = "lg" }) {
  const classes = ["browserMock", `browserMock--${size}`, className].filter(Boolean).join(" ");

  return (
    <div className={classes} aria-label="App preview">
      <div className="browserMock__top" aria-hidden="true">
        <div className="browserMock__circles">
          <span className="browserMock__circle browserMock__circle--red" />
          <span className="browserMock__circle browserMock__circle--amber" />
          <span className="browserMock__circle browserMock__circle--green" />
        </div>

        <div className="browserMock__address">{address}</div>

        <div className="browserMock__arrows">
          <span className="browserMock__arrow" />
          <span className="browserMock__arrow browserMock__arrow--right" />
        </div>
      </div>

      <div className="browserMock__body" aria-hidden="true">
        <div className="browserMock__sidebar">
          <div className="browserMock__pill browserMock__pill--wide" />
          <div className="browserMock__pill" />
          <div className="browserMock__pill browserMock__pill--short" />
          <div className="browserMock__pill browserMock__pill--short" />
        </div>

        <div className="browserMock__content">
          <div className="browserMock__contentTop">
            <div className="browserMock__pill browserMock__pill--wide" />
            <div className="browserMock__pill" />
          </div>

          <div className="browserMock__grid">
            <div className="browserMock__card browserMock__card--accent" />
            <div className="browserMock__card browserMock__card--ring" />
            <div className="browserMock__card browserMock__card--ring" />
            <div className="browserMock__card browserMock__card--stars" />
          </div>
        </div>
      </div>
    </div>
  );
}

