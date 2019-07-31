

class Modal extends HTMLElement {
    get visible() {
        return this.hasAttribute("visible");
    }

    set visible(value) {
        if (value) {
            this.setAttribute("visible", "");
        } else {
            this.removeAttribute("visible");
        }
    }

    get foto() {
        return this.getAttribute('foto');
    }

    set foto(value) {
        this.setAttribute('foto', value);
    }

    get nombre() {
        return this.getAttribute('nombre');
    }

    set nombre(value) {
        this.setAttribute('nombre', value);
    }
    
    constructor() {
        super();
    }

    connectedCallback() {
        this._render();
        this._attachEventHandlers();
    }
    static get observedAttributes() {
        return ["visible", "foto", "nombre"];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        //console.log(newValue);
        if (name === "nombre" && this.shadowRoot) {
            this.shadowRoot.getElementById("nombre").textContent = newValue;
        }
        if (name === "foto" && this.shadowRoot) {
            this.shadowRoot.getElementById("foto").src = newValue;
        }
        if (name === "visible" && this.shadowRoot) {
            if (newValue === null) {
                this.shadowRoot.querySelector(".wrapper").classList.remove("visible");
                this.dispatchEvent(new CustomEvent("close"));
            } else {
                this.shadowRoot.querySelector(".wrapper").classList.add("visible");
                this.dispatchEvent(new CustomEvent("open"))
            }
        }
    }

  

    _render() {
        const wrapperClass = this.visible ? "wrapper visible" : "wrapper";
        const container = document.createElement("div");
        container.innerHTML = `
            <style>
                .wrapper {
                    position: fixed;
                    left: 0;
                    top: 0;
                    width: 100%;
                    height: 100%;
                    opacity: 0;
                    visibility: hidden;
                    transform: scale(1.1);
                    transition: visibility 0s linear .25s, opacity .25s 0s, transform .25s;
                    z-index: 1;
                }

                .visible {
                    opacity: 1;
                    visibility: visible;
                    transform: scale(1);
                    transition: visibility 0s linear 0s, opacity .25s 0s, transform .25s;
                }

                .modal {
                    font-family: Helvetica;
                    font-size: 14px;
                    padding: 20px 20px 25px 20px;
                    background-color: #fff;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    border-radius: 2px;
                    min-width: 200px;
                    border:solid;

                }

                .title {
                    font-size: 18px;
                }

                .button-container {
                    text-align: right;
                }

                button {
                    min-width: 80px;
                    background-color: #848e97;
                    border-color: #848e97;
                    border-style: solid;
                    border-radius: 2px;
                    padding: 3px;
                    color: white;
                    cursor: pointer;
                }
                .close {
                    min-width: 30px;
                    border-radius: 100px;
                }

                button:hover {
                    background-color: #6c757d;
                    border-color: #6c757d;
                }

                .imgRedonda {
                    width: 200px;
                    height: 200px;
                    border-radius: 100px;
                }
                .tarjeta-content {
                    text-align: center;
                    font-weight: 600;
                    font-size: large;
                }
                
            </style>
            <div class='${wrapperClass}'>
                <div class='modal'>
                    <div style='text-align: right'>
                        <button class='close'>X</button>
                    </div>
                    <div>
                        <div style='text-align: center'>
                            <img id='foto' src=${this.foto} class="imgRedonda" height="200">
                        </div>
                    </div>
                    <div class='tarjeta-content'>
                        <div>
                           <span id="nombre">${this.nombre? this.nombre:'-'}</span>
                        </div>
                    </div>
                </div>
            </div>
            `;

        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(container);
    }

    _attachEventHandlers() {
        const cancelButton = this.shadowRoot.querySelector(".close");
        cancelButton.addEventListener('click', e => {
            this.dispatchEvent(new CustomEvent("cancel"))
            this.removeAttribute("visible");
        });
    }
}
window.customElements.define('tarjeta-foto', Modal);