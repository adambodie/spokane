import * as React from 'react';
import { withRouter } from 'react-router';
import { RouteComponentProps } from 'react-router';


class ScrollToTop extends React.Component<RouteComponentProps<any>> {
  componentDidUpdate(prevProps: any) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }
  
  render() {
    return (
		<div>
			{this.props.children}
		</div>
		)
  }
}

export default withRouter(ScrollToTop);