import "./TrendsAnimation.css";

export default function TrendsAnimation() {
  return (
    <div className="trendsAnimation">
      <div className="trendsAnimation__orbit trendsAnimation__orbit--1">
        <div className="trendsAnimation__square trendsAnimation__square--1" />
      </div>
      <div className="trendsAnimation__orbit trendsAnimation__orbit--2">
        <div className="trendsAnimation__square trendsAnimation__square--2" />
      </div>
      <div className="trendsAnimation__orbit trendsAnimation__orbit--3">
        <div className="trendsAnimation__square trendsAnimation__square--3" />
      </div>
      <div className="trendsAnimation__orbit trendsAnimation__orbit--4">
        <div className="trendsAnimation__square trendsAnimation__square--4" />
      </div>
      <div className="trendsAnimation__orbit trendsAnimation__orbit--5">
        <div className="trendsAnimation__square trendsAnimation__square--solid" />
      </div>
    </div>
  );
}
