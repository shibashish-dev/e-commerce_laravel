export const hasRole = (user, role) => {
    return user?.roles?.some((r) => r.name === role);
};
