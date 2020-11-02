export interface Theme {
    pageBackground: string,
    padBackground: string,
    gradient: {
        blue: string, 
        red: string,
        green: string, 
        yellow: string,
        gray: string
    }
}

const theme: Theme = {
    pageBackground: '#ecf0f1',
    padBackground: '#2c3e50',
    gradient: {
        blue: 'radial-gradient( circle farthest-corner at 50.4% 50.5%,  rgba(4,189,228,1) 0%, rgba(2,83,185,1) 90% )',
        red: 'radial-gradient( circle farthest-corner at 50.4% 50.5%,  rgba(251,32,86,1) 0%, rgba(135,2,35,1) 90% )',
        green: 'radial-gradient( circle farthest-corner at 50.4% 50.5%, rgba(198,239,146,1)  0%, rgba(1,150,21,1) 90% )',
        yellow: 'radial-gradient( circle farthest-corner at 50.4% 50.5%,  rgba(251,221,19,1) 0%, rgba(255,153,1,1) 90% )',
        gray: 'radial-gradient( circle farthest-corner at 50.4% 50.5%,  rgba(244,248,252,1) 0%, rgba(223,234,247,1) 90% )'
    }
};

export default theme;