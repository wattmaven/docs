---
title: Users
description: Learn how users work in WattMaven.
---

A user is an individual who has access to a WattMaven account. Users can be members of one or
more [teams](/concepts/teams) and have specific roles and permissions within those teams.

## Authentication providers

Instead of using an email and password to sign in, you must use a third-party authentication provider. This is more
secure than using a password because we can delegate the security of your account to the authentication provider (who
likely has more resources to secure your account than we do).

WattMaven supports the following authentication providers:

- [GitHub](https://github.com)
- [Google](https://google.com)

Once you sign in with an authentication provider, we'll create a user account for you. You can then use that account to
sign in to WattMaven.

## FAQ

### I created an account with X provider. Can I sign in with Y?

Currently, **you can only sign in with the authentication provider you used to create your account**. If you want to
sign in
with a different provider, you'll need to create a new account.

This is for security concerns. Even though both accounts may have the same email address, we can't guarantee that they
belong to the same person, since different providers have different security measures.
