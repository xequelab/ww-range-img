<template>
  <div class="image-position-controller" :style="containerStyle">
    <!-- Cross Control Area -->
    <div class="control-area" :style="controlAreaStyle">
      <!-- Y Label (Top) -->
      <div v-if="showLabels" class="label label-top" :style="labelStyle">
        {{ yLabel }}: <span :style="valueStyle">{{ currentY }}</span><span v-if="showPercentage">%</span>
      </div>

      <!-- Cross Layout -->
      <div class="cross-container" :style="crossContainerStyle">
        <!-- Top Arrow (Y+) -->
        <button
          class="arrow-btn arrow-top"
          :style="arrowButtonStyle"
          @click="incrementY"
          @mousedown="startContinuous('y', 1)"
          @mouseup="stopContinuous"
          @mouseleave="stopContinuous"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M7 14l5-5 5 5z"/>
          </svg>
        </button>

        <!-- Middle Row: Left Arrow, Center Point, Right Arrow -->
        <div class="middle-row">
          <!-- Left Arrow (X-) -->
          <button
            class="arrow-btn arrow-left"
            :style="arrowButtonStyle"
            @click="decrementX"
            @mousedown="startContinuous('x', -1)"
            @mouseup="stopContinuous"
            @mouseleave="stopContinuous"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M14 7l-5 5 5 5z"/>
            </svg>
          </button>

          <!-- Center Point -->
          <div class="center-point" :style="centerPointStyle"></div>

          <!-- Right Arrow (X+) -->
          <button
            class="arrow-btn arrow-right"
            :style="arrowButtonStyle"
            @click="incrementX"
            @mousedown="startContinuous('x', 1)"
            @mouseup="stopContinuous"
            @mouseleave="stopContinuous"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 7l5 5-5 5z"/>
            </svg>
          </button>
        </div>

        <!-- Bottom Arrow (Y-) -->
        <button
          class="arrow-btn arrow-bottom"
          :style="arrowButtonStyle"
          @click="decrementY"
          @mousedown="startContinuous('y', -1)"
          @mouseup="stopContinuous"
          @mouseleave="stopContinuous"
        >
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M7 10l5 5 5-5z"/>
          </svg>
        </button>
      </div>

      <!-- X Label (Bottom) -->
      <div v-if="showLabels" class="label label-bottom" :style="labelStyle">
        {{ xLabel }}: <span :style="valueStyle">{{ currentX }}</span><span v-if="showPercentage">%</span>
      </div>
    </div>

    <!-- Action Buttons -->
    <div class="button-group" :style="buttonGroupStyle">
      <button
        class="action-btn cancel-btn"
        :style="cancelButtonStyle"
        @click="handleCancel"
      >
        {{ cancelButtonLabel }}
      </button>
      <button
        class="action-btn save-btn"
        :style="saveButtonStyle"
        @click="handleSave"
      >
        {{ saveButtonLabel }}
      </button>
    </div>
  </div>
</template>

<script>
import { ref, computed, watch, onUnmounted } from 'vue';

export default {
  name: 'ImagePositionController',
  props: {
    content: {
      type: Object,
      required: true
    },
    uid: {
      type: String,
      required: true
    },
    /* wwEditor:start */
    wwEditorState: {
      type: Object,
      required: true
    }
    /* wwEditor:end */
  },
  emits: ['trigger-event'],
  setup(props, { emit }) {
    const isEditing = computed(() => {
      /* wwEditor:start */
      return props.wwEditorState.isEditing;
      /* wwEditor:end */
      // eslint-disable-next-line no-unreachable
      return false;
    });

    // Component variables
    const { value: currentX, setValue: setCurrentX } = wwLib.wwVariable.useComponentVariable({
      uid: props.uid,
      name: 'currentX',
      type: 'number',
      defaultValue: computed(() => props.content?.xValue || 50)
    });

    const { value: currentY, setValue: setCurrentY } = wwLib.wwVariable.useComponentVariable({
      uid: props.uid,
      name: 'currentY',
      type: 'number',
      defaultValue: computed(() => props.content?.yValue || 50)
    });

    // Store initial values for cancel
    const initialX = ref(props.content?.xValue || 50);
    const initialY = ref(props.content?.yValue || 50);

    // Watch for prop changes to update initial values
    watch(() => [props.content?.xValue, props.content?.yValue], ([newX, newY]) => {
      if (newX !== undefined) {
        initialX.value = newX;
        setCurrentX(newX);
      }
      if (newY !== undefined) {
        initialY.value = newY;
        setCurrentY(newY);
      }
    });

    // Continuous increment/decrement
    const continuousInterval = ref(null);

    const startContinuous = (axis, direction) => {
      if (isEditing.value) return;

      stopContinuous();
      continuousInterval.value = setInterval(() => {
        if (axis === 'x') {
          direction > 0 ? incrementX() : decrementX();
        } else {
          direction > 0 ? incrementY() : decrementY();
        }
      }, 100);
    };

    const stopContinuous = () => {
      if (continuousInterval.value) {
        clearInterval(continuousInterval.value);
        continuousInterval.value = null;
      }
    };

    onUnmounted(() => {
      stopContinuous();
    });

    // Increment/Decrement functions
    const step = computed(() => props.content?.step || 1);

    const incrementX = () => {
      if (isEditing.value) return;
      const newValue = Math.min(100, currentX.value + step.value);
      setCurrentX(newValue);
      if (props.content?.enableRealTimeUpdate) {
        emitChange();
      }
    };

    const decrementX = () => {
      if (isEditing.value) return;
      const newValue = Math.max(0, currentX.value - step.value);
      setCurrentX(newValue);
      if (props.content?.enableRealTimeUpdate) {
        emitChange();
      }
    };

    const incrementY = () => {
      if (isEditing.value) return;
      const newValue = Math.min(100, currentY.value + step.value);
      setCurrentY(newValue);
      if (props.content?.enableRealTimeUpdate) {
        emitChange();
      }
    };

    const decrementY = () => {
      if (isEditing.value) return;
      const newValue = Math.max(0, currentY.value - step.value);
      setCurrentY(newValue);
      if (props.content?.enableRealTimeUpdate) {
        emitChange();
      }
    };

    const emitChange = () => {
      emit('trigger-event', {
        name: 'change',
        event: {
          x: currentX.value,
          y: currentY.value
        }
      });
    };

    const handleSave = () => {
      if (isEditing.value) return;

      emit('trigger-event', {
        name: 'save',
        event: {
          x: currentX.value,
          y: currentY.value
        }
      });
    };

    const handleCancel = () => {
      if (isEditing.value) return;

      setCurrentX(initialX.value);
      setCurrentY(initialY.value);

      emit('trigger-event', {
        name: 'cancel',
        event: {
          x: initialX.value,
          y: initialY.value
        }
      });
    };

    const reset = () => {
      if (isEditing.value) return;
      setCurrentX(initialX.value);
      setCurrentY(initialY.value);
    };

    const setPosition = (x, y) => {
      if (isEditing.value) return false;
      if (x !== undefined && x >= 0 && x <= 100) {
        setCurrentX(x);
      }
      if (y !== undefined && y >= 0 && y <= 100) {
        setCurrentY(y);
      }
      return true;
    };

    // Computed styles
    const containerStyle = computed(() => ({
      padding: props.content?.containerPadding || '24px',
      gap: props.content?.containerGap || '16px'
    }));

    const controlAreaStyle = computed(() => ({
      gap: props.content?.spacing || '8px'
    }));

    const crossContainerStyle = computed(() => ({
      width: props.content?.controlSize || '200px',
      height: props.content?.controlSize || '200px',
      backgroundColor: props.content?.crossBackgroundColor || '#f5f5f5',
      borderColor: props.content?.crossBorderColor || '#e0e0e0',
      borderWidth: props.content?.crossBorderWidth || '1px',
      borderRadius: props.content?.crossBorderRadius || '8px'
    }));

    const centerPointStyle = computed(() => ({
      width: props.content?.centerPointSize || '20px',
      height: props.content?.centerPointSize || '20px',
      backgroundColor: props.content?.centerPointColor || '#007bff'
    }));

    const arrowButtonStyle = computed(() => ({
      width: props.content?.arrowButtonSize || '40px',
      height: props.content?.arrowButtonSize || '40px',
      color: props.content?.arrowButtonColor || '#007bff',
      '--hover-color': props.content?.arrowButtonHoverColor || '#0056b3'
    }));

    const labelStyle = computed(() => ({
      color: props.content?.labelColor || '#333333',
      fontSize: props.content?.labelFontSize || '14px'
    }));

    const valueStyle = computed(() => ({
      fontSize: props.content?.valueFontSize || '16px',
      fontWeight: props.content?.valueFontWeight || 600
    }));

    const buttonGroupStyle = computed(() => ({
      gap: props.content?.buttonGap || '12px'
    }));

    const cancelButtonStyle = computed(() => ({
      backgroundColor: props.content?.cancelButtonBackgroundColor || '#6c757d',
      color: props.content?.cancelButtonTextColor || '#ffffff',
      padding: props.content?.buttonPadding || '12px 24px',
      borderRadius: props.content?.buttonBorderRadius || '4px',
      fontSize: props.content?.buttonFontSize || '16px'
    }));

    const saveButtonStyle = computed(() => ({
      backgroundColor: props.content?.saveButtonBackgroundColor || '#007bff',
      color: props.content?.saveButtonTextColor || '#ffffff',
      padding: props.content?.buttonPadding || '12px 24px',
      borderRadius: props.content?.buttonBorderRadius || '4px',
      fontSize: props.content?.buttonFontSize || '16px'
    }));

    return {
      isEditing,
      currentX,
      currentY,
      step,
      showLabels: computed(() => props.content?.showLabels !== false),
      showPercentage: computed(() => props.content?.showPercentage !== false),
      xLabel: computed(() => props.content?.xLabel || 'X Position'),
      yLabel: computed(() => props.content?.yLabel || 'Y Position'),
      cancelButtonLabel: computed(() => props.content?.cancelButtonLabel || 'Cancel'),
      saveButtonLabel: computed(() => props.content?.saveButtonLabel || 'Save'),
      incrementX,
      decrementX,
      incrementY,
      decrementY,
      handleSave,
      handleCancel,
      startContinuous,
      stopContinuous,
      reset,
      setPosition,
      containerStyle,
      controlAreaStyle,
      crossContainerStyle,
      centerPointStyle,
      arrowButtonStyle,
      labelStyle,
      valueStyle,
      buttonGroupStyle,
      cancelButtonStyle,
      saveButtonStyle
    };
  }
};
</script>

<style scoped lang="scss">
.image-position-controller {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.control-area {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.label {
  text-align: center;
  user-select: none;

  &.label-top {
    margin-bottom: 8px;
  }

  &.label-bottom {
    margin-top: 8px;
  }
}

.cross-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-style: solid;
  position: relative;
}

.middle-row {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
}

.arrow-btn {
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  border-radius: 50%;
  padding: 0;
  flex-shrink: 0;

  svg {
    width: 100%;
    height: 100%;
  }

  &:hover {
    color: var(--hover-color);
    transform: scale(1.1);
  }

  &:active {
    transform: scale(0.95);
  }

  &:focus {
    outline: none;
  }
}

.center-point {
  border-radius: 50%;
  flex-shrink: 0;
}

.button-group {
  display: flex;
  justify-content: center;
  width: 100%;
}

.action-btn {
  border: none;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  outline: none;

  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
}
</style>
