export const handlePending = state => {
    state.isLoading = true;
};

export const handlePendingRefresh = state => {
    state.isRefreshing = true;
};

export const handleRejected = (state, { payload }) => {
    state.isLoading = false;
    state.error = payload;
};

export const handleRejectedRefresh = (state, { payload }) => {
    state.isRefreshing = false;
    state.error = payload;
};

export const handleFulfilled = state => {
    state.isLoading = false;
    state.error = null;
};

export const handleSignUpFulfilled = (state, { payload }) => {
    state.user = payload.user;
    state.token = payload.token;
    state.isLoggedIn = true;
};

export const handleLoginFulfilled = (state, { payload }) => {
    state.user = payload.user;
    state.token = payload.token;
    state.isLoggedIn = true;
};

export const handleLogoutFulfilled = state => {
    state.user = { name: null, email: null };
    state.token = null;
    state.isLoggedIn = false;
};

export const handleRefreshFulfilled = (state, { payload }) => {
    state.isRefreshing = false;
    state.user = payload;
    state.isLoggedIn = true;
    state.error = null;
};
