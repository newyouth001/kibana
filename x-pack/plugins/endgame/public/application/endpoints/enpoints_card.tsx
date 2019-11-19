/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import React, { Component } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { EuiCard } from '@elastic/eui';
import { routePathsById } from '../../common/route_paths';

class EndpointsCard extends Component<RouteComponentProps> {
  render() {
    return (
      <EuiCard
        layout="horizontal"
        title="Endpoint Management"
        description="View and manage the endpoints"
        onClick={() => this.props.history.push(routePathsById.endpoints.path)}
      />
    );
  }
}

export const EndpointsCardShowcase = withRouter(EndpointsCard);