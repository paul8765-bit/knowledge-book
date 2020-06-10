import React from 'react';
import store from './app/store';
import AwaitingApprovalPostList from './features/posts/AwaitingApprovalPostList';

export default function(props) {
    return (
        <div className="adminArea">
          <h1>Admin Area</h1>
          <AwaitingApprovalPostList posts={store.getState().posts} />
        </div>
      );
}