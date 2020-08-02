class TV {
  constructor(brand, price = 50000, inches = 50, onOff = 0) {
    this.brand = brand;
    this.price = price;
    this.inches = inches;
    this.onOff = onOff;
    this.reset();
  }
  increase_volume = function (increaseby) {
    this.volume = this.volume + increaseby;
    if (this.volume > 100) {
      return 100;
    }
    return this.volume;
  };
  decrease_volume = function (decreaseby) {
    this.volume = this.volume - decreaseby;
    if (this.volume < 0) {
      return 0;
    }
    return this.volume;
  };
  set_channel = function (channel_number) {
    if (channel_number < 51) {
      this.channel = channel_number;
    }
  };
  reset = function () {
    this.channel = 1;
    this.volume = 50;
  };
  info = function () {
    return `${this.brand} at channel ${this.channel}, volume ${this.volume}`;
  };
}

class LED extends TV {
  constructor(
    brand,
    screen_thickness = 3,
    energy_usage = 100,
    life_span = 20,
    refresh_rate,
    price = 70000,
    inches = 60,
    onOff
  ) {
    super(brand, price, inches, onOff);
    this.screen_thickness = screen_thickness;
    this.energy_usage = energy_usage;
    this.life_span = life_span;
    this.refresh_rate = refresh_rate;
  }
  backlight = function () {
    console.log("backlight works only for LED");
  };
  display_details = function () {
    return `${this.brand} of ${this.price} with thickness ${this.screen_thickness} cm, refresh rate of ${this.refresh_rate} Hz, and life span of ${this.life_span} years`;
  };
}

class plasma extends TV {
  constructor(
    brand,
    screen_thickness = 1,
    energy_usage = 50,
    life_span = 40,
    refresh_rate = 144,
    price = 90000,
    inches = 70,
    onOff
  ) {
    super(brand, price, inches, onOff);
    this.screen_thickness = screen_thickness;
    this.energy_usage = energy_usage;
    this.life_span = life_span;
    this.refresh_rate = refresh_rate;
  }
  viewing_angle = function () {
    console.log("changing viewing angle, works only for plasma");
  };
  display_details = function () {
    return `${this.brand} of ${this.price} with thickness ${this.screen_thickness} cm, refresh rate of ${this.refresh_rate} Hz, and life span of ${this.life_span} years`;
  };
}
