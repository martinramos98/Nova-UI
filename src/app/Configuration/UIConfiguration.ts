const UIconfig = {
	components: {
		Dropdown: {
			variants: {
				solid: {},
				bordered: {},
				faded: {}
			}
		}
	},
	DropdownButton: {
		variants: {
			solid: {},
			bordered: {},
			faded: {}
		}
	},
	DropdownGroup: {
		variants: {
			solid: {},
			bordered: {},
			faded: {}
		}
	},
	Button: {
		variants: {
			solid: {},
			bordered: {},
			faded: {}
		}
	},
	colors: {
		default:{
			'color-container':'',
			'color-subcontainer':'',
			'color-text':'',
			'color-border':'',
			'color-shadow':''
		},
		primary: {
			'color-container':'',
			'color-subcontainer':'',
			'color-text':'',
			'color-border':'',
		},
		secondary: {
			'color-container':'',
			'color-subcontainer':'',
			'color-text':'',
			'color-border':'',
		},
		tertiary: {
			'color-container':'',
			'color-subcontainer':'',
			'color-text':'',
			'color-border':'',
		},
		warning: {
			'color-container':'',
			'color-subcontainer':'',
			'color-text':'',
			'color-border':'',
		},
		error: {
			'color-container':'',
			'color-subcontainer':'',
			'color-text':'',
			'color-border':'',
		},
		info: {
			'color-container':'',
			'color-subcontainer':'',
			'color-text':'',
			'color-border':'',
		},
		success:{
			'color-container':'',
			'color-subcontainer':'',
			'color-text':'',
			'color-border':'',
		},
	}
};
// TODO:  Se definen esquemas de colores, cada uno de estos tiene que definir color de contenedor, de text, de borde y los que sean necesarios, tales como sobres o otros tipos de colores que hagan falta en ese esquema.
// Tiene que haber un color scheme por default
// Se buildea la css y se carga desde el document?

export default UIconfig;
