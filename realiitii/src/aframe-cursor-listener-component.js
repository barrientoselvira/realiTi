/* global AFRAME */


var activeAudio;
var activeTarget;

AFRAME.registerComponent('cursor-listener', {
    schema: {
      text: {
        type: 'string',
        default: '',
      },
      name: {
        type: 'string',
        default: 'Name',
      },
      audio: {
        type: 'selector',
      },
      autoplay: {
        type: 'boolean',
        default: false,
      },
      playControls: {
        type: 'array',
        default: ['click'],
      },
    },
    
    init: function () {
      this.attachEventListeners = this.attachEventListeners.bind(this);
      this.removeEventListeners = this.removeEventListeners.bind(this);
      this.eventHandler = this.eventHandler.bind(this);
      this.resolvePlayState = this.resolvePlayState.bind(this);
      this.playAudio = this.playAudio.bind(this);
      this.pauseAudio = this.pauseAudio.bind(this);
      this.showText = this.showText.bind(this);
      this.hideText = this.hideText.bind(this);
      this.setColor = this.setColor.bind(this);
  
      var color = this.el.getAttribute('material', 'color');
      if (color) {
        this.originalColor = color.split(':')[1].trim();
      }
    },
  
    play: function () {
      if (this.data.autoplay) {
        this.playAudio();
        this.showText();
      } else {
        this.hideText();
      }
      this.attachEventListeners();
    },
  
    pause: function () {
      this.removeEventListeners();
    },
    
    attachEventListeners: function () {
      const events = this.data.playControls;
      if (!events) { return; }
  
      for (var i = 0; i < events.length; ++i) {
        this.el.addEventListener(events[i], this.eventHandler, false);
      }
    },
  
    removeEventListeners: function () {
      const events = this.data.playControls;
      if (!events) { return; }
  
      for (var i = 0; i < events.length; ++i) {
        this.el.removeEventListener(events[i], this.eventHandler);
      }
    },
  
    eventHandler: function (evt) {
      if (!evt.key) {
        switch (evt.type) {
          case 'click':
            this.resolvePlayState();
            break;
          default:
            break;
        }
      } else if (evt.key === ' ') {
        this.resolvePlayState();
      }
  
    },
  
    resolvePlayState: function () {
      const { audio } = this.data;
      if (!audio) { return; }
  
      if (audio.paused) {
        this.playAudio();
        this.showText();
        this.setColor('green');
      } else {
        this.pauseAudio();
        this.hideText();
        if (this.originalColor) {
          this.setColor(this.originalColor);
        }
      }
    },
  
    playAudio: function () {
      if (this.data.audio) {
        if (activeTarget) {
          activeTarget.audio.pause();
        }
        activeTarget = this.data;
        this.data.audio.play();
      }
    },
  
    pauseAudio: function () {
      if (this.data.audio) {
        this.data.audio.pause();
      }
    },
    
    setColor: function(color) {
      this.el.setAttribute('material', 'color', color);
    },
    
    showText: function() {
      if (this.data.text) {
        document.querySelector(this.data.text).setAttribute("opacity", "100");
      }
    },
    
    hideText: function() {
      if (this.data.text) {
        document.querySelector(this.data.text).setAttribute("opacity", "0");
      }
    },
  
    
  });
  