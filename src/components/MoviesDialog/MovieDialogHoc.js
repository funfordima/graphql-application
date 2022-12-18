import { compose } from 'recompose';
import { graphql } from 'react-apollo';

import { deleteMutation } from './mutation.js';
import { moviesQuery } from '../MoviesTable/queries';

const withGraphqlDelete = graphql(deleteMutation, {
  props: ({ mutate }) => ({
    deleteMovie: id => mutate({
      variables: id,
      refetchQueries: [{
        query: moviesQuery,
        variables: { name: '' },
      }],
    }),
  }),
});

export default compose(withGraphqlDelete);
