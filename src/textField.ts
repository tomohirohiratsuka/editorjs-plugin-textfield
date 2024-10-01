import {API, BlockTool, BlockToolConstructorOptions} from '@editorjs/editorjs';
import { MenuConfigItem} from "@editorjs/editorjs/types/tools";
import './styles.css';



type TextFieldConstructorOptions = BlockToolConstructorOptions<TextFieldData, TextFieldConfig>
export default class TextField implements BlockTool {
    private api: API;
    private data: TextFieldData;
    private config: TextFieldConfig
    private nodes: TextFieldNodeMap;
    private isReadOnly: boolean;


    constructor({data, api, config, readOnly , block}: TextFieldConstructorOptions) {
        this.api = api;
        this.config = {
            inputType: config?.inputType || data?.inputType || 'text',  // Set default input type
            placeholder: config?.placeholder || data?.placeholder || 'Enter text here',  // Set default placeholder
        }
        this.data = {
            value: data.value || '',
            inputType: this.config.inputType as string,  // Set default input type
            placeholder: this.config.placeholder as string,  // Set default placeholder
        };
        const container = this.createContainer()
        const input = this.createInput();
        const placeholderInput = this.createPlaceholderInput();
        container.appendChild(input);
        container.appendChild(placeholderInput);
        this.nodes = {
            input,
            container,
            placeholderInput,
        }
        this.isReadOnly = readOnly;

    }

    static get toolbox() {
        //tool names can be translated via toolNames
        return {
            title: 'Text Field',
            icon: '<span>📝</span>',
        };
    }

    private createContainer() {
        const container = document.createElement('div');
        container.className = 'it__container';
        return container;
    }

    private createInput() {
        const input = document.createElement('input');
        input.type = this.data.inputType; // Set input type based on selected option
        input.value = this.data.value;
        input.placeholder = this.data.placeholder;
        input.className = 'it__input'
        input.addEventListener('input', (event) => {
            this.data.value = (event.target as HTMLInputElement).value;
        });
        return input;
    }

    private createPlaceholderInput() {
        const container = document.createElement('div');
        container.className = 'it__hide'; //default hide
        const label = document.createElement('label');
        label.innerText = this.api.i18n.t('Placeholder');
        const input = document.createElement('input');
        input.value = this.data.placeholder;
        input.type = 'text'
        input.placeholder = 'Type here placeholder';
        input.className = 'it__input';
        input.addEventListener('input', (event) => {
            this.data.placeholder = (event.target as HTMLInputElement).value;
        });
        container.appendChild(label);
        container.appendChild(input);
        return container;
    }

    render() {
        return this.nodes.container;
    }

    save(_: HTMLDivElement) {
        return this.data
    }

    renderSettings(): MenuConfigItem[] {
        return [
            {
                icon: `<span>😎</span>`,
                label: this.api.i18n.t('Style'),
                children: {
                    items: [
                        {
                            icon: ``,
                            title: this.api.i18n.t('Width'),
                            children: {
                                items: [
                                    {
                                        icon: ``,
                                        title: this.api.i18n.t('Full Width'),
                                        onActivate: () => {
                                            this.setWidth('full');
                                        }
                                    },
                                    {
                                        icon: ``,
                                        title: this.api.i18n.t('Large'),
                                        onActivate: () => {
                                            this.setWidth('lg');
                                        }
                                    },
                                    {
                                        icon: ``,
                                        title: this.api.i18n.t('Medium'),
                                        onActivate: () => {
                                            this.setWidth('md');
                                        }
                                    },
                                    {
                                        icon: ``,
                                        title: this.api.i18n.t('Small'),
                                        onActivate: () => {
                                            this.setWidth('sm');
                                        }
                                    }
                                ]
                            }
                        },
                        {
                            icon: ``,
                            title: this.api.i18n.t('Font Size'),
                            children: {
                                items: [
                                    {
                                        icon: ``,
                                        title: this.api.i18n.t('X-Small'),
                                        onActivate: () => {
                                            this.setFontSize('xs');
                                        }
                                    },
                                    {
                                        icon: ``,
                                        title: this.api.i18n.t('Small'),
                                        onActivate: () => {
                                            this.setFontSize('sm');
                                        }
                                    },
                                    {
                                        icon: ``,
                                        title: this.api.i18n.t('Medium'),
                                        onActivate: () => {
                                            this.setFontSize('md');
                                        }
                                    },
                                    {
                                        icon: ``,
                                        title: this.api.i18n.t('Large'),
                                        onActivate: () => {
                                            this.setFontSize('lg');
                                        }
                                    },
                                    {
                                        icon: ``,
                                        title: this.api.i18n.t('X-Large'),
                                        onActivate: () => {
                                            this.setFontSize('xl');
                                        }
                                    }
                                ]
                            }
                        }
                    ]
                }
            },
            {
                icon: `<span>🔤</span>`,
                label: this.api.i18n.t('Type'),
                children: {
                    items: [
                        {
                            icon: ``,
                            title: this.api.i18n.t('Text'),
                            onActivate: () => {
                                this.setType('text');
                            }
                        },
                        {
                            icon: ``,
                            title: this.api.i18n.t('Password'),
                            onActivate: () => {
                                this.setType('password');
                            }
                        },
                        {
                            icon: ``,
                            title: this.api.i18n.t('Email'),
                            onActivate: () => {
                                this.setType('email');
                            }
                        },
                        {
                            icon: ``,
                            title: this.api.i18n.t('Number'),
                            onActivate: () => {
                                this.setType('number');
                            }
                        },
                        {
                            icon: ``,
                            title: this.api.i18n.t('Tel'),
                            onActivate: () => {
                                this.setType('tel');
                            }
                        },
                        {
                            icon: ``,
                            title: this.api.i18n.t('URL'),
                            onActivate: () => {
                                this.setType('url');
                            }
                        },
                        {
                            icon: ``,
                            title: this.api.i18n.t('Date'),
                            onActivate: () => {
                                this.setType('date');
                            }
                        },
                        {
                            icon: ``,
                            title: this.api.i18n.t('Time'),
                            onActivate: () => {
                                this.setType('time');
                            }
                        },
                        {
                            icon: ``,
                            title: this.api.i18n.t('Month'),
                            onActivate: () => {
                                this.setType('month');
                            }
                        },
                        {
                            icon: ``,
                            title: this.api.i18n.t('Week'),
                            onActivate: () => {
                                this.setType('week');
                            }
                        },
                        {
                            icon: ``,
                            title: this.api.i18n.t('Datetime-local'),
                            onActivate: () => {
                                this.setType('datetime-local');
                            }
                        },

                    ]
                }
            },
            {
                icon: `🅿️`,
                label: this.api.i18n.t('Placeholder'),
                children: {
                    items: [
                        {
                            icon: ``,
                            title: this.api.i18n.t('Placeholder'),
                            onActivate: () => {
                                this.nodes.placeholderInput.classList.toggle('it__custom-placeholder');
                            }
                        }
                    ]
                }
            }
        ];
    }

    /**
     * Set width of input field
     * @param size
     * @private
     */
    private setWidth(size: 'sm' | 'md' | 'lg' | 'full') {
        const sizes = ['sm', 'md', 'lg', 'full'];
        sizes.forEach((size) => {
            this.nodes.input.classList.remove(`it__input--width-${size}`);
        })
        this.nodes.input.classList.add(`it__input--width-${size}`);
    }

    private setFontSize(size: 'xs' | 'sm' | 'md' | 'lg' | 'xl') {
        const sizes = ['xs', 'sm', 'md', 'lg', 'xl'];
        sizes.forEach((size) => {
            this.nodes.input.classList.remove(`it__input--font-${size}`);
        })
        this.nodes.input.classList.add(`it__input--font-${size}`);
    }

    /**
     * Set type of input field
     * @param type
     * @private
     */
    private setType(type: AvailableTextFieldTypes) {
        this.nodes.input.type = type;
        this.nodes.input.value = '';
        //may be custom class needed
    }

    /**
     * Notify core that read-only mode is supported
     */
    public static get isReadOnlySupported(): boolean {
        return true;
    }


}
