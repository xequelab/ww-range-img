export default {
  editor: {
    label: {
      en: 'Image Position Controller'
    },
    icon: 'view-quilt'
  },
  triggerEvents: [
    {
      name: 'change',
      label: { en: 'On position change' },
      event: {
        x: 50,
        y: 50
      },
      default: false
    },
    {
      name: 'save',
      label: { en: 'On save' },
      event: {
        x: 50,
        y: 50
      },
      default: true
    },
    {
      name: 'cancel',
      label: { en: 'On cancel' },
      event: {
        x: 50,
        y: 50
      }
    }
  ],
  actions: [
    {
      label: { en: 'Reset position' },
      action: 'reset'
    },
    {
      label: { en: 'Set position' },
      action: 'setPosition',
      args: [
        {
          name: 'x',
          type: 'number'
        },
        {
          name: 'y',
          type: 'number'
        }
      ]
    }
  ],
  properties: {
    // ===== SETTINGS SECTION =====
    xValue: {
      label: { en: 'X Position (Initial)' },
      type: 'Number',
      section: 'settings',
      bindable: true,
      responsive: true,
      defaultValue: 50,
      options: {
        min: 0,
        max: 100,
        step: 1
      },
      /* wwEditor:start */
      bindingValidation: {
        type: 'number',
        tooltip: 'X position value from 0 to 100'
      },
      propertyHelp: {
        tooltip: 'Initial X position (0-100)'
      }
      /* wwEditor:end */
    },
    yValue: {
      label: { en: 'Y Position (Initial)' },
      type: 'Number',
      section: 'settings',
      bindable: true,
      responsive: true,
      defaultValue: 50,
      options: {
        min: 0,
        max: 100,
        step: 1
      },
      /* wwEditor:start */
      bindingValidation: {
        type: 'number',
        tooltip: 'Y position value from 0 to 100'
      },
      propertyHelp: {
        tooltip: 'Initial Y position (0-100)'
      }
      /* wwEditor:end */
    },
    step: {
      label: { en: 'Step Increment' },
      type: 'Number',
      section: 'settings',
      bindable: true,
      defaultValue: 1,
      options: {
        min: 0.1,
        max: 10,
        step: 0.1
      },
      /* wwEditor:start */
      bindingValidation: {
        type: 'number',
        tooltip: 'Step increment when clicking arrows'
      },
      propertyHelp: {
        tooltip: 'How much to increment/decrement with each arrow click'
      }
      /* wwEditor:end */
    },
    showLabels: {
      label: { en: 'Show Labels' },
      type: 'OnOff',
      section: 'settings',
      bindable: true,
      defaultValue: true,
      /* wwEditor:start */
      bindingValidation: {
        type: 'boolean',
        tooltip: 'Show or hide position labels'
      },
      propertyHelp: {
        tooltip: 'Display X and Y position labels'
      }
      /* wwEditor:end */
    },
    showPercentage: {
      label: { en: 'Show Percentage Sign' },
      type: 'OnOff',
      section: 'settings',
      bindable: true,
      defaultValue: true,
      /* wwEditor:start */
      bindingValidation: {
        type: 'boolean',
        tooltip: 'Show or hide % symbol'
      },
      propertyHelp: {
        tooltip: 'Display "%" symbol after values'
      }
      /* wwEditor:end */
    },
    xLabel: {
      label: { en: 'X Position Label' },
      type: 'Text',
      section: 'settings',
      bindable: true,
      defaultValue: 'X Position',
      options: {
        placeholder: 'X Position'
      },
      /* wwEditor:start */
      bindingValidation: {
        type: 'string',
        tooltip: 'Label text for X position'
      },
      propertyHelp: {
        tooltip: 'Custom label for X axis'
      }
      /* wwEditor:end */
    },
    yLabel: {
      label: { en: 'Y Position Label' },
      type: 'Text',
      section: 'settings',
      bindable: true,
      defaultValue: 'Y Position',
      options: {
        placeholder: 'Y Position'
      },
      /* wwEditor:start */
      bindingValidation: {
        type: 'string',
        tooltip: 'Label text for Y position'
      },
      propertyHelp: {
        tooltip: 'Custom label for Y axis'
      }
      /* wwEditor:end */
    },
    cancelButtonLabel: {
      label: { en: 'Cancel Button Label' },
      type: 'Text',
      section: 'settings',
      bindable: true,
      defaultValue: 'Cancel',
      options: {
        placeholder: 'Cancel'
      },
      /* wwEditor:start */
      bindingValidation: {
        type: 'string',
        tooltip: 'Text for cancel button'
      },
      propertyHelp: {
        tooltip: 'Label for the cancel button'
      }
      /* wwEditor:end */
    },
    saveButtonLabel: {
      label: { en: 'Save Button Label' },
      type: 'Text',
      section: 'settings',
      bindable: true,
      defaultValue: 'Save',
      options: {
        placeholder: 'Save'
      },
      /* wwEditor:start */
      bindingValidation: {
        type: 'string',
        tooltip: 'Text for save button'
      },
      propertyHelp: {
        tooltip: 'Label for the save button'
      }
      /* wwEditor:end */
    },
    enableRealTimeUpdate: {
      label: { en: 'Enable Real-Time Update' },
      type: 'OnOff',
      section: 'settings',
      bindable: true,
      defaultValue: false,
      /* wwEditor:start */
      bindingValidation: {
        type: 'boolean',
        tooltip: 'Enable real-time onChange events'
      },
      propertyHelp: {
        tooltip: 'Trigger onChange event while dragging sliders (not just on Save)'
      }
      /* wwEditor:end */
    },

    // ===== LAYOUT SECTION =====
    controlSize: {
      label: { en: 'Cross Control Size' },
      type: 'Length',
      section: 'layout',
      bindable: true,
      responsive: true,
      defaultValue: '200px',
      options: {
        unitChoices: [
          { value: 'px', label: 'px', min: 100, max: 500 }
        ]
      },
      /* wwEditor:start */
      bindingValidation: {
        type: 'string',
        tooltip: 'Size of the cross control (e.g., "200px")'
      },
      propertyHelp: {
        tooltip: 'Width and height of the cross control area'
      }
      /* wwEditor:end */
    },
    centerPointSize: {
      label: { en: 'Center Point Size' },
      type: 'Length',
      section: 'layout',
      bindable: true,
      defaultValue: '20px',
      options: {
        unitChoices: [
          { value: 'px', label: 'px', min: 10, max: 50 }
        ]
      },
      /* wwEditor:start */
      bindingValidation: {
        type: 'string',
        tooltip: 'Size of center point (e.g., "20px")'
      },
      propertyHelp: {
        tooltip: 'Diameter of the center point circle'
      }
      /* wwEditor:end */
    },
    arrowButtonSize: {
      label: { en: 'Arrow Button Size' },
      type: 'Length',
      section: 'layout',
      bindable: true,
      responsive: true,
      defaultValue: '40px',
      options: {
        unitChoices: [
          { value: 'px', label: 'px', min: 20, max: 80 }
        ]
      },
      /* wwEditor:start */
      bindingValidation: {
        type: 'string',
        tooltip: 'Size of arrow buttons (e.g., "40px")'
      },
      propertyHelp: {
        tooltip: 'Width and height of directional arrow buttons'
      }
      /* wwEditor:end */
    },
    spacing: {
      label: { en: 'Element Spacing' },
      type: 'Length',
      section: 'layout',
      bindable: true,
      defaultValue: '8px',
      options: {
        unitChoices: [
          { value: 'px', label: 'px', min: 0, max: 50 }
        ]
      },
      /* wwEditor:start */
      bindingValidation: {
        type: 'string',
        tooltip: 'Spacing between elements (e.g., "8px")'
      },
      propertyHelp: {
        tooltip: 'Gap between labels, controls, and sliders'
      }
      /* wwEditor:end */
    },
    containerPadding: {
      label: { en: 'Container Padding' },
      type: 'Length',
      section: 'layout',
      bindable: true,
      responsive: true,
      defaultValue: '24px',
      /* wwEditor:start */
      bindingValidation: {
        type: 'string',
        tooltip: 'Padding around component (e.g., "24px")'
      },
      propertyHelp: {
        tooltip: 'Internal padding of the component container'
      }
      /* wwEditor:end */
    },
    containerGap: {
      label: { en: 'Container Gap' },
      type: 'Length',
      section: 'layout',
      bindable: true,
      defaultValue: '16px',
      options: {
        unitChoices: [
          { value: 'px', label: 'px', min: 0, max: 50 }
        ]
      },
      /* wwEditor:start */
      bindingValidation: {
        type: 'string',
        tooltip: 'Gap between major sections (e.g., "16px")'
      },
      propertyHelp: {
        tooltip: 'Vertical gap between cross, sliders, and buttons'
      }
      /* wwEditor:end */
    },

    // ===== BUTTON STYLE SECTION =====
    buttonPadding: {
      label: { en: 'Button Padding' },
      type: 'Length',
      section: 'buttons',
      bindable: true,
      responsive: true,
      defaultValue: '12px 24px',
      /* wwEditor:start */
      bindingValidation: {
        type: 'string',
        tooltip: 'Button padding (e.g., "12px 24px")'
      },
      propertyHelp: {
        tooltip: 'Internal padding for action buttons'
      }
      /* wwEditor:end */
    },
    buttonBorderRadius: {
      label: { en: 'Button Border Radius' },
      type: 'Length',
      section: 'buttons',
      bindable: true,
      defaultValue: '4px',
      options: {
        unitChoices: [
          { value: 'px', label: 'px', min: 0, max: 50 }
        ]
      },
      /* wwEditor:start */
      bindingValidation: {
        type: 'string',
        tooltip: 'Button border radius (e.g., "4px")'
      },
      propertyHelp: {
        tooltip: 'Rounded corners for buttons'
      }
      /* wwEditor:end */
    },
    buttonFontSize: {
      label: { en: 'Button Font Size' },
      type: 'Length',
      section: 'buttons',
      bindable: true,
      responsive: true,
      defaultValue: '16px',
      options: {
        unitChoices: [
          { value: 'px', label: 'px', min: 10, max: 32 }
        ]
      },
      /* wwEditor:start */
      bindingValidation: {
        type: 'string',
        tooltip: 'Button text size (e.g., "16px")'
      },
      propertyHelp: {
        tooltip: 'Font size for button labels'
      }
      /* wwEditor:end */
    },
    buttonGap: {
      label: { en: 'Buttons Gap' },
      type: 'Length',
      section: 'buttons',
      bindable: true,
      defaultValue: '12px',
      options: {
        unitChoices: [
          { value: 'px', label: 'px', min: 0, max: 50 }
        ]
      },
      /* wwEditor:start */
      bindingValidation: {
        type: 'string',
        tooltip: 'Gap between buttons (e.g., "12px")'
      },
      propertyHelp: {
        tooltip: 'Space between Cancel and Save buttons'
      }
      /* wwEditor:end */
    },
    cancelButtonBackgroundColor: {
      label: { en: 'Cancel Button Background' },
      type: 'Color',
      section: 'buttons',
      bindable: true,
      defaultValue: '#6c757d',
      options: {
        nullable: true
      },
      /* wwEditor:start */
      bindingValidation: {
        type: 'string',
        tooltip: 'Background color for cancel button'
      },
      propertyHelp: {
        tooltip: 'Background color of the Cancel button'
      }
      /* wwEditor:end */
    },
    cancelButtonTextColor: {
      label: { en: 'Cancel Button Text Color' },
      type: 'Color',
      section: 'buttons',
      bindable: true,
      defaultValue: '#ffffff',
      options: {
        nullable: true
      },
      /* wwEditor:start */
      bindingValidation: {
        type: 'string',
        tooltip: 'Text color for cancel button'
      },
      propertyHelp: {
        tooltip: 'Text color of the Cancel button'
      }
      /* wwEditor:end */
    },
    saveButtonBackgroundColor: {
      label: { en: 'Save Button Background' },
      type: 'Color',
      section: 'buttons',
      bindable: true,
      defaultValue: '#007bff',
      options: {
        nullable: true
      },
      /* wwEditor:start */
      bindingValidation: {
        type: 'string',
        tooltip: 'Background color for save button'
      },
      propertyHelp: {
        tooltip: 'Background color of the Save button'
      }
      /* wwEditor:end */
    },
    saveButtonTextColor: {
      label: { en: 'Save Button Text Color' },
      type: 'Color',
      section: 'buttons',
      bindable: true,
      defaultValue: '#ffffff',
      options: {
        nullable: true
      },
      /* wwEditor:start */
      bindingValidation: {
        type: 'string',
        tooltip: 'Text color for save button'
      },
      propertyHelp: {
        tooltip: 'Text color of the Save button'
      }
      /* wwEditor:end */
    },

    // ===== CONTROL STYLE SECTION =====
    crossBackgroundColor: {
      label: { en: 'Cross Background Color' },
      type: 'Color',
      section: 'controls',
      bindable: true,
      defaultValue: '#f5f5f5',
      options: {
        nullable: true
      },
      /* wwEditor:start */
      bindingValidation: {
        type: 'string',
        tooltip: 'Background color of cross container'
      },
      propertyHelp: {
        tooltip: 'Background color of the cross control area'
      }
      /* wwEditor:end */
    },
    crossBorderColor: {
      label: { en: 'Cross Border Color' },
      type: 'Color',
      section: 'controls',
      bindable: true,
      defaultValue: '#e0e0e0',
      options: {
        nullable: true
      },
      /* wwEditor:start */
      bindingValidation: {
        type: 'string',
        tooltip: 'Border color of cross container'
      },
      propertyHelp: {
        tooltip: 'Border color around the cross control'
      }
      /* wwEditor:end */
    },
    crossBorderWidth: {
      label: { en: 'Cross Border Width' },
      type: 'Length',
      section: 'controls',
      bindable: true,
      defaultValue: '1px',
      options: {
        unitChoices: [
          { value: 'px', label: 'px', min: 0, max: 10 }
        ]
      },
      /* wwEditor:start */
      bindingValidation: {
        type: 'string',
        tooltip: 'Border width (e.g., "1px")'
      },
      propertyHelp: {
        tooltip: 'Thickness of the cross control border'
      }
      /* wwEditor:end */
    },
    crossBorderRadius: {
      label: { en: 'Cross Border Radius' },
      type: 'Length',
      section: 'controls',
      bindable: true,
      defaultValue: '8px',
      options: {
        unitChoices: [
          { value: 'px', label: 'px', min: 0, max: 50 }
        ]
      },
      /* wwEditor:start */
      bindingValidation: {
        type: 'string',
        tooltip: 'Border radius (e.g., "8px")'
      },
      propertyHelp: {
        tooltip: 'Rounded corners of the cross control'
      }
      /* wwEditor:end */
    },
    centerPointColor: {
      label: { en: 'Center Point Color' },
      type: 'Color',
      section: 'controls',
      bindable: true,
      defaultValue: '#007bff',
      options: {
        nullable: true
      },
      /* wwEditor:start */
      bindingValidation: {
        type: 'string',
        tooltip: 'Color of center point'
      },
      propertyHelp: {
        tooltip: 'Color of the center circle indicator'
      }
      /* wwEditor:end */
    },
    arrowButtonColor: {
      label: { en: 'Arrow Button Color' },
      type: 'Color',
      section: 'controls',
      bindable: true,
      defaultValue: '#007bff',
      options: {
        nullable: true
      },
      /* wwEditor:start */
      bindingValidation: {
        type: 'string',
        tooltip: 'Color of arrow buttons'
      },
      propertyHelp: {
        tooltip: 'Color of directional arrow icons'
      }
      /* wwEditor:end */
    },
    arrowButtonHoverColor: {
      label: { en: 'Arrow Button Hover Color' },
      type: 'Color',
      section: 'controls',
      bindable: true,
      defaultValue: '#0056b3',
      options: {
        nullable: true
      },
      /* wwEditor:start */
      bindingValidation: {
        type: 'string',
        tooltip: 'Hover color for arrows'
      },
      propertyHelp: {
        tooltip: 'Color when hovering over arrow buttons'
      }
      /* wwEditor:end */
    },
    labelColor: {
      label: { en: 'Label Text Color' },
      type: 'Color',
      section: 'controls',
      bindable: true,
      defaultValue: '#333333',
      options: {
        nullable: true
      },
      /* wwEditor:start */
      bindingValidation: {
        type: 'string',
        tooltip: 'Color of label text'
      },
      propertyHelp: {
        tooltip: 'Text color for X/Y position labels'
      }
      /* wwEditor:end */
    },
    labelFontSize: {
      label: { en: 'Label Font Size' },
      type: 'Length',
      section: 'controls',
      bindable: true,
      responsive: true,
      defaultValue: '14px',
      options: {
        unitChoices: [
          { value: 'px', label: 'px', min: 10, max: 24 }
        ]
      },
      /* wwEditor:start */
      bindingValidation: {
        type: 'string',
        tooltip: 'Font size for labels (e.g., "14px")'
      },
      propertyHelp: {
        tooltip: 'Font size of position labels'
      }
      /* wwEditor:end */
    },
    valueFontSize: {
      label: { en: 'Value Font Size' },
      type: 'Length',
      section: 'controls',
      bindable: true,
      responsive: true,
      defaultValue: '16px',
      options: {
        unitChoices: [
          { value: 'px', label: 'px', min: 12, max: 32 }
        ]
      },
      /* wwEditor:start */
      bindingValidation: {
        type: 'string',
        tooltip: 'Font size for values (e.g., "16px")'
      },
      propertyHelp: {
        tooltip: 'Font size of position values'
      }
      /* wwEditor:end */
    },
    valueFontWeight: {
      label: { en: 'Value Font Weight' },
      type: 'Number',
      section: 'controls',
      bindable: true,
      defaultValue: 600,
      options: {
        min: 100,
        max: 900,
        step: 100
      },
      /* wwEditor:start */
      bindingValidation: {
        type: 'number',
        tooltip: 'Font weight (100-900)'
      },
      propertyHelp: {
        tooltip: 'Font weight for position values'
      }
      /* wwEditor:end */
    },
    labelBackgroundColor: {
      label: { en: 'Label Background Color' },
      type: 'Color',
      section: 'controls',
      bindable: true,
      defaultValue: '#ffffff',
      options: {
        nullable: true
      },
      /* wwEditor:start */
      bindingValidation: {
        type: 'string',
        tooltip: 'Background color for labels'
      },
      propertyHelp: {
        tooltip: 'Background color of position labels for better readability'
      }
      /* wwEditor:end */
    },
    labelPadding: {
      label: { en: 'Label Padding' },
      type: 'Length',
      section: 'controls',
      bindable: true,
      defaultValue: '8px 16px',
      /* wwEditor:start */
      bindingValidation: {
        type: 'string',
        tooltip: 'Padding for labels (e.g., "8px 16px")'
      },
      propertyHelp: {
        tooltip: 'Internal padding of position labels'
      }
      /* wwEditor:end */
    },
    labelBorderRadius: {
      label: { en: 'Label Border Radius' },
      type: 'Length',
      section: 'controls',
      bindable: true,
      defaultValue: '4px',
      options: {
        unitChoices: [
          { value: 'px', label: 'px', min: 0, max: 50 }
        ]
      },
      /* wwEditor:start */
      bindingValidation: {
        type: 'string',
        tooltip: 'Border radius for labels (e.g., "4px")'
      },
      propertyHelp: {
        tooltip: 'Rounded corners of position labels'
      }
      /* wwEditor:end */
    },
    labelSpacing: {
      label: { en: 'Label Spacing' },
      type: 'Length',
      section: 'layout',
      bindable: true,
      defaultValue: '16px',
      options: {
        unitChoices: [
          { value: 'px', label: 'px', min: 0, max: 100 }
        ]
      },
      /* wwEditor:start */
      bindingValidation: {
        type: 'string',
        tooltip: 'Spacing between labels and cross (e.g., "16px")'
      },
      propertyHelp: {
        tooltip: 'Distance between position labels and the cross control'
      }
      /* wwEditor:end */
    }
  }
};
