const getBgColor = (key: string) => {
    switch (key){
        case 'redux':
            return '#8847ff';
        case 'reduxsaga':
            return '#86d46b';
            // case 'react':
            //     return '#5468ff';
            //     case 'rn':
            //         return '#004dcf';
            //         case 'rnanimated':
            //             return '#8847ff';
                        case 'fb':
                            return 'orange';
        default :
            return '#ffffff';
    }
};
export default getBgColor;
