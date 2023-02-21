import _ from 'lodash';
import defaultTheme from './default';
import brandTheme from './default';
// import brandTheme from './fsa';
// import brandTheme from './national';

const theme = _.merge(defaultTheme, brandTheme);

console.log(theme)

export default {
    ...theme,
}