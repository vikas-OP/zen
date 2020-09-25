import React from "react";
import data from "./pricingData";
import PricingCard from "./PricingCard";
class Pricing extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      free: data[0],
      plus: data[1],
      pro: data[2],
    };
  }
  render() {
    return (
      <section className="pricing py-5">
        <div className="container">
          <div className="row">
            <PricingCard data={this.state.free} />
            <PricingCard data={this.state.plus} />
            <PricingCard data={this.state.pro} />
          </div>
        </div>
      </section>
    );
  }
}
export default Pricing;
