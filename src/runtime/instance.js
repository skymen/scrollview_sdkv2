import { id, addonType } from "../../config.caw.js";
import AddonTypeMap from "../../template/addonTypeMap.js";

export default function (parentClass) {
  return class extends parentClass {
    constructor() {
      super();
      this.scrollProgressX = 0;
      this.scrollProgressY = 0;
      this.maxSpeed = 0;
      this.deceleration = 0;
      this.vectorX = 0;
      this.vectorY = 0;
      this.scrollTarget = null;
      this.marginLeft = 0;
      this.marginTop = 0;
      this.marginRight = 0;
      this.marginBottom = 0;
      this.overscrollX = 0;
      this.overscrollY = 0;
      this.showOverscroll = false;
      this.maxOverScroll = 0;
      this.autoPickFirstChild = false;
      this.scrollDirection = 0;
      this.alignHorizontal = 0;
      this.alignVertical = 0;
      this.overscrollPushback = 0;
      this.overscrollDecelerationRatio = 5;
      this.snapSpeedThreshold = 0;
      this.snapDistanceThreshold = 0;
      this.snapSpeed = 0;
      this.nbColumns = 0;
      this.nbRows = 0;
      this.enableSnap = false;
      this._enabled = true;

      const properties = this._getInitProperties();
      if (properties) {
        this.maxSpeed = properties[0];
        this.deceleration = Math.max(properties[1], 0);
        this.overscrollPushback = Math.max(properties[2], 0);
        this.overscrollDecelerationRatio = Math.max(properties[3], 1);
        this.scrollDirection = properties[4];
        this.alignHorizontal = properties[5];
        this.alignVertical = properties[6];
        this.marginLeft = properties[7];
        this.marginTop = properties[8];
        this.marginRight = properties[9];
        this.marginBottom = properties[10];
        this.maxOverScroll = properties[11];
        this.showOverscroll = properties[12];
        this.autoPickFirstChild = properties[13];
        this.enableSnap = properties[14];
        this.snapSpeedThreshold = properties[15];
        this.snapDistanceThreshold = properties[16];
        this.snapSpeed = properties[17];
        this.nbColumns = properties[18];
        this.nbRows = properties[19];
        this._enabled = properties[20];
      }

      this._setTicking(this._enabled);
    }

    get enabled() {
      return this._enabled;
    }

    set enabled(value) {
      if (this._enabled === !!value) return;
      this._enabled = !!value;
      this._setTicking(this._enabled);
    }

    get speed() {
      return Math.sqrt(
        this.vectorX * this.vectorX + this.vectorY * this.vectorY
      );
    }

    get scrollWidth() {
      if (!this.scrollTarget) {
        return 0;
      }
      return this.scrollTarget.width + this.marginLeft + this.marginRight;
    }

    get scrollHeight() {
      if (!this.scrollTarget) {
        return 0;
      }
      return this.scrollTarget.height + this.marginTop + this.marginBottom;
    }

    get scrollX() {
      const scrollWidth = this.scrollWidth;
      if (scrollWidth === 0) {
        return 0;
      }
      return this.scrollProgressX * scrollWidth;
    }

    set scrollX(val) {
      const scrollWidth = this.scrollWidth;
      if (scrollWidth === 0) {
        this.scrollProgressX = 0;
        return;
      }
      this.scrollProgressX = val / scrollWidth;
    }

    get scrollY() {
      const scrollHeight = this.scrollHeight;
      if (scrollHeight === 0) {
        return 0;
      }
      return this.scrollProgressY * scrollHeight;
    }

    set scrollY(val) {
      const scrollHeight = this.scrollHeight;
      if (scrollHeight === 0) {
        this.scrollProgressY = 0;
        return;
      }
      this.scrollProgressY = val / scrollHeight;
    }

    _trigger(method) {
      this.dispatch(method);
      super._trigger(self.C3[AddonTypeMap[addonType]][id].Cnds[method]);
    }

    on(tag, callback, options) {
      if (!this.events[tag]) {
        this.events[tag] = [];
      }
      this.events[tag].push({ callback, options });
    }

    off(tag, callback) {
      if (this.events[tag]) {
        this.events[tag] = this.events[tag].filter(
          (event) => event.callback !== callback
        );
      }
    }

    dispatch(tag) {
      if (this.events[tag]) {
        this.events[tag].forEach((event) => {
          if (event.options && event.options.params) {
            const fn = self.C3[AddonTypeMap[addonType]][id].Cnds[tag];
            if (fn && !fn.call(this, ...event.options.params)) {
              return;
            }
          }
          event.callback();
          if (event.options && event.options.once) {
            this.off(tag, event.callback);
          }
        });
      }
    }

    _release() {
      this.scrollTarget = null;
      super._release();
    }

    _tick() {
      if (!this.scrollTarget) {
        if (this.autoPickFirstChild) {
          this.autoPickFirstChild = false;
          for (const child of this.instance.children()) {
            this.scrollTarget = child;
            break;
          }
          if (!this.scrollTarget) {
            return;
          }
        } else {
          return;
        }
      }
      const dt = this.instance.dt;

      if (this.scrollDirection === 0) {
        this.vectorX = 0;
        this.overscrollX = 0;
      } else if (this.scrollDirection === 1) {
        this.vectorY = 0;
        this.overscrollY = 0;
      }

      if (this.scrollX < 0 || this.scrollX > this.scrollWidth) {
        if (this.scrollX < 0) {
          this.scrollX -= Math.max(
            this.overscrollX,
            Math.max(-0.5, this.overscrollX / this.maxOverScroll) *
              this.overscrollPushback *
              dt
          );
        } else {
          this.scrollX -= Math.min(
            this.overscrollX,
            Math.min(0.5, this.overscrollX / this.maxOverScroll) *
              this.overscrollPushback *
              dt
          );
        }
        if (
          (this.scrollX < 0 && this.vectorX < 0) ||
          (this.scrollX > 0 && this.vectorX > 0)
        ) {
          this.vectorX -=
            this.deceleration * dt +
            (this.overscrollX / this.maxOverScroll) *
              this.overscrollPushback *
              this.overscrollDecelerationRatio *
              dt;
        }
      }
      if (this.scrollY < 0 || this.scrollY > this.scrollHeight) {
        if (this.scrollY < 0) {
          this.scrollY -= Math.max(
            this.overscrollY,
            Math.max(-0.5, this.overscrollY / this.maxOverScroll) *
              this.overscrollPushback *
              dt
          );
        } else {
          this.scrollY -= Math.max(
            this.overscrollY,
            Math.min(0.5, this.overscrollY / this.maxOverScroll) *
              this.overscrollPushback *
              dt
          );
        }
        if (
          (this.scrollY < 0 && this.vectorY < 0) ||
          (this.scrollY > 0 && this.vectorY > 0)
        ) {
          this.vectorY -=
            this.deceleration * dt +
            (this.overscrollY / this.maxOverScroll) *
              this.overscrollPushback *
              this.overscrollDecelerationRatio *
              dt;
        }
      }

      const speed = this.speed;
      if (speed > this.maxSpeed) {
        const ratio = this.maxSpeed / speed;
        this.vectorX *= ratio;
        this.vectorY *= ratio;
      }

      if (this.enableSnap && speed < this.snapSpeedThreshold) {
        const scrollWidth = this.scrollWidth;
        const scrollHeight = this.scrollHeight;
        const scrollX = this.scrollX;
        const scrollY = this.scrollY;
        let snapX = 0;
        if (scrollX < this.marginLeft) {
          snapX = 0;
        } else if (scrollX > scrollWidth - this.marginRight) {
          snapX = scrollWidth;
        } else {
          const snapWidth =
            (scrollWidth - this.marginLeft - this.marginRight) / this.nbColumns;
          snapX =
            this.marginLeft +
            Math.round((scrollX - this.marginLeft) / snapWidth) * snapWidth;
        }

        let snapY = 0;
        if (scrollY < this.marginTop) {
          snapY = 0;
        } else if (scrollY > scrollHeight - this.marginBottom) {
          snapY = scrollHeight;
        } else {
          const snapHeight =
            (scrollHeight - this.marginTop - this.marginBottom) / this.nbRows;
          snapY =
            this.marginTop +
            Math.round((scrollY - this.marginTop) / snapHeight) * snapHeight;
        }

        if (Math.abs(snapX - scrollX) < this.snapDistanceThreshold) {
          this.scrollX += Math.min(
            Math.sign(snapX - scrollX) * this.snapSpeed * dt,
            Math.abs(snapX - scrollX)
          );

          if (Math.abs(this.scrollX - snapX) < 0.1) {
            this.scrollX = snapX;
          }
        }

        if (Math.abs(snapY - scrollY) < this.snapDistanceThreshold) {
          this.scrollY += Math.min(
            Math.sign(snapY - scrollY) * this.snapSpeed * dt,
            Math.abs(snapY - scrollY)
          );

          if (Math.abs(this.scrollY - snapY) < 0.1) {
            this.scrollY = snapY;
          }
        }
      }

      if (this.vectorX !== 0) {
        this.scrollX += this.vectorX * dt;
        if (this.vectorX > 0) {
          this.vectorX = Math.max(this.vectorX - this.deceleration * dt, 0);
        }
        if (this.vectorX < 0) {
          this.vectorX = Math.min(this.vectorX + this.deceleration * dt, 0);
        }
      }
      if (this.vectorY !== 0) {
        this.scrollY += this.vectorY * dt;
        if (this.vectorY > 0) {
          this.vectorY = Math.max(this.vectorY - this.deceleration * dt, 0);
        }
        if (this.vectorY < 0) {
          this.vectorY = Math.min(this.vectorY + this.deceleration * dt, 0);
        }
      }

      const scrollWidth = this.scrollWidth;
      const scrollHeight = this.scrollHeight;
      this.scrollX = Math.max(
        Math.min(this.scrollX, scrollWidth + this.maxOverScroll),
        -this.maxOverScroll
      );
      this.scrollY = Math.max(
        Math.min(this.scrollY, scrollHeight + this.maxOverScroll),
        -this.maxOverScroll
      );

      if (this.scrollX < 0) this.overscrollX = this.scrollX;
      else if (this.scrollX > scrollWidth)
        this.overscrollX = this.scrollX - scrollWidth;
      else this.overscrollX = 0;

      if (this.scrollY < 0) this.overscrollY = this.scrollY;
      else if (this.scrollY > scrollHeight)
        this.overscrollY = this.scrollY - scrollHeight;
      else this.overscrollY = 0;

      const host = this.instance;
      const w = host.width;
      const h = host.height;

      if (this.scrollWidth < w) {
        if (this.alignHorizontal === 0) {
          this.scrollX = 0;
        } else if (this.alignHorizontal === 1) {
          this.scrollX = this.scrollWidth / 2;
        } else {
          this.scrollX = this.scrollWidth;
        }
      }

      if (this.scrollHeight < h) {
        if (this.alignVertical === 0) {
          this.scrollY = 0;
        } else if (this.alignVertical === 1) {
          this.scrollY = this.scrollHeight / 2;
        } else {
          this.scrollY = this.scrollHeight;
        }
      }

      let scrollX = this.scrollX;
      let scrollY = this.scrollY;

      if (!this.showOverscroll) {
        scrollX = Math.max(Math.min(this.scrollX, scrollWidth), 0);
        scrollY = Math.max(Math.min(this.scrollY, scrollHeight), 0);
      }

      const target = this.scrollTarget;
      const bbox = host.getBoundingBox();
      const lerp = (a, b, t) => a + (b - a) * t;
      const left = lerp(
        this.marginLeft,
        -scrollWidth + w + this.marginRight,
        scrollX / scrollWidth
      );
      const top = lerp(
        this.marginTop,
        -scrollHeight + h + this.marginBottom,
        scrollY / scrollHeight
      );
      target.x = bbox.left + left + target.width * target.originX;
      target.y = bbox.top + top + target.height * target.originY;
    }

    _getDebuggerProperties() {
      return [
        {
          title: "Scrollview",
          properties: [
            { name: "Scroll X", value: this.scrollX, readonly: true },
            { name: "Scroll Y", value: this.scrollY, readonly: true },
            { name: "Scroll Width", value: this.scrollWidth, readonly: true },
            { name: "Scroll Height", value: this.scrollHeight, readonly: true },
            {
              name: "Scroll Progress X",
              value: this.scrollProgressX,
              readonly: true,
            },
            {
              name: "Scroll Progress Y",
              value: this.scrollProgressY,
              readonly: true,
            },
            { name: "Overscroll X", value: this.overscrollX, readonly: true },
            { name: "Overscroll Y", value: this.overscrollY, readonly: true },
            { name: "Vector X", value: this.vectorX, readonly: true },
            { name: "Vector Y", value: this.vectorY, readonly: true },
            { name: "Speed", value: this.speed, readonly: true },
          ],
        },
      ];
    }

    _saveToJson() {
      return {
        scrollProgressX: this.scrollProgressX,
        scrollProgressY: this.scrollProgressY,
        maxSpeed: this.maxSpeed,
        deceleration: this.deceleration,
        vectorX: this.vectorX,
        vectorY: this.vectorY,
        marginLeft: this.marginLeft,
        marginTop: this.marginTop,
        marginRight: this.marginRight,
        marginBottom: this.marginBottom,
        overscrollX: this.overscrollX,
        overscrollY: this.overscrollY,
        showOverscroll: this.showOverscroll,
        maxOverScroll: this.maxOverScroll,
        autoPickFirstChild: this.autoPickFirstChild,
        scrollDirection: this.scrollDirection,
        alignHorizontal: this.alignHorizontal,
        alignVertical: this.alignVertical,
        overscrollPushback: this.overscrollPushback,
        overscrollDecelerationRatio: this.overscrollDecelerationRatio,
        snapSpeedThreshold: this.snapSpeedThreshold,
        snapDistanceThreshold: this.snapDistanceThreshold,
        snapSpeed: this.snapSpeed,
        nbColumns: this.nbColumns,
        nbRows: this.nbRows,
        enableSnap: this.enableSnap,
        enabled: this._enabled,
        instance: this.scrollTarget ? this.scrollTarget.uid : null,
      };
    }

    _loadFromJson(o) {
      this.scrollProgressX = o.scrollProgressX;
      this.scrollProgressY = o.scrollProgressY;
      this.maxSpeed = o.maxSpeed;
      this.deceleration = o.deceleration;
      this.vectorX = o.vectorX;
      this.vectorY = o.vectorY;
      this.marginLeft = o.marginLeft;
      this.marginTop = o.marginTop;
      this.marginRight = o.marginRight;
      this.marginBottom = o.marginBottom;
      this.overscrollX = o.overscrollX;
      this.overscrollY = o.overscrollY;
      this.showOverscroll = o.showOverscroll;
      this.maxOverScroll = o.maxOverScroll;
      this.autoPickFirstChild = o.autoPickFirstChild;
      if (o.scrollDirection !== undefined) {
        this.scrollDirection = o.scrollDirection;
      }
      this.alignHorizontal = o.alignHorizontal;
      this.alignVertical = o.alignVertical;
      this.overscrollPushback = o.overscrollPushback;
      this.overscrollDecelerationRatio = o.overscrollDecelerationRatio;
      this.snapSpeedThreshold = o.snapSpeedThreshold;
      this.snapDistanceThreshold = o.snapDistanceThreshold;
      this.snapSpeed = o.snapSpeed;
      this.nbColumns = o.nbColumns;
      this.nbRows = o.nbRows;
      this.enableSnap = o.enableSnap;
      this.enabled = o.enabled;
      this.scrollTarget =
        o.instance === null || o.instance === undefined
          ? null
          : this.runtime.getInstanceByUid(o.instance);
    }
  };
}
