const particleOptions = {
  particles: {
    number: {
      value: 40,
      density: {
        enable: true,
        value_area: 500
      }
    },
    color: {
      value: '#fff'
    },
    shape: {
      type: 'circle',
      stroke: {
        width: 1,
        color: '#00f'
      }
    },
    opacity: {
      value: 0.5,
      random: true
    },
    size: {
      value: 10,
      random: true
    },
    line_linked: {
      enable: false,
      distance: 200,
      color: '#033dfc',
      opacity: 0.3,
      width: 2
    },
    move: {
      enable: true,
      speed: 3,
      direction: 'top',
      random: true,
      straight: false,
      out_mode: 'out',
      bounce: true,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  }
};

export default particleOptions;
