import React from "react";

class ScrollCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            scrollPosition: 0,
        };
    }

    // Sincronizar estado con props (opcional, no usado en este ejemplo)
    // static getDerivedStateFromProps(props, state) {
    //     return null; // No actualiza nada basado en props
    // }

    // Decide si debe renderizarse el componente
    shouldComponentUpdate(nextProps, nextState) {
        // Evita renders innecesarios
        return nextState.count !== this.state.count || nextState.scrollPosition !== this.state.scrollPosition;
    }

    // Captura el estado del DOM antes de la actualización
    getSnapshotBeforeUpdate(prevProps, prevState) {
        if (prevState.scrollPosition !== this.state.scrollPosition) {
            console.log(`Scroll antes de actualizar: ${window.scrollY}`);
            return window.scrollY; // Captura la posición del scroll
        }
        return null;
    }

    // Maneja actualizaciones posteriores al render
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (snapshot !== null) {
            console.log(`Scroll después de actualizar: ${snapshot}`);
        }
    }

    // Inicia operaciones al montar el componente
    componentDidMount() {
        console.log("Componente montado");
        // Incrementa el contador cada segundo
        this.timer = setInterval(() => {
            this.setState((prevState) => ({ count: prevState.count + 1 }));
        }, 1000);

        // Escucha eventos de scroll
        window.addEventListener("scroll", this.handleScroll);
    }

    // Limpia recursos antes de desmontar el componente
    componentWillUnmount() {
        console.log("Componente desmontado");
        clearInterval(this.timer); // Limpia el temporizador
        window.removeEventListener("scroll", this.handleScroll); // Remueve el listener
    }

    // Maneja el evento de scroll
    handleScroll = () => {
        this.setState({ scrollPosition: window.scrollY });
    };

    // Renderiza el componente
    render() {
        return (
            <div style={{ height: "150vh", padding: "20px" }}>
                <h1>Contador: {this.state.count}</h1>
                <p>Posición actual del scroll: {this.state.scrollPosition}px</p>
                <p>Desplázate hacia abajo para ver los cambios de scroll.</p>
            </div>
        );
    }
}

export default ScrollCounter;
