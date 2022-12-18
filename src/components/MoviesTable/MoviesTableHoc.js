import { withStyles } from '@material-ui/core/styles';
import { compose } from 'recompose';
import { graphql } from 'react-apollo';

import { moviesQuery } from './queries.js';

import { styles } from './styles';

const withGraphQL = graphql(moviesQuery, {
  options: ({ name = '' }) => ({
    variables: { name },
  }),
});

export default compose(withStyles(styles), withGraphQL);
