---
path: "/policies/policy_on_policies"
title: "Policy on Policies"
date: 2018-11-18T12:33:46+10:00
image: "images/markus-spiske-Skf7HxARcoc-unsplash.jpg"
sortField: 110
---

_Headline_:

- Eschew distribution of our policies outside our organization
- Favor policies-as-code, templates, and checklists that are version controlled

### We Limit Distribution of Policies and Records

We don't like to share. At least our policies that aren't part of specific work
product for a customer. However, we recognize that some customers require
certain documentation as part of their evaluation process. So, we don't have a
hard-and-fast rule to limit distribution. But why do we prefer to not distribute
our policies?

### Policies can be a significant security risk vector

Even knowledge of "routine" DevOps can give bad actors knowledge to damage us.
Separately, it's hard to screen all sensitive information. Any documentation
about our processes, security measures, policies, architecture, logging, and so
on is part of our critical infrastructure. We understand that NDAs can minimize
exposure, but not totally, and it's for this reason that we severely limit
distribution.

### Policy sanitization wastes engineers' time

These documents are often written by technical staff for internal technical
staff. As such, however much we try, they often can contain sensitive
information that's not easily discernible by non-technical staff. This requires
either removing that information at the time of writing, which means they will
be less effective, or it means keeping a second set of redacted documents for
external distribution. This is a lot of work by highly paid engineers that we
believe should be spent writing software.

### Policies often require technical context to understand

Since so much policy deals with infrastructure, these policies are themselves
code, in-code comments, or CI/CD. These are not themselves easily understood
without correct technical context.

### "Policies that work" often don't "look good" to outside eyes.

We write our policies to deliver exceptional systems. This sometimes means
actionable scraps of paper over well-written Word documents that are rarely
used. In light of this, we assert that policies really aren't a great measure of
future performance.

## Guidelines for Distributing Policies Externally

So you still want to distribute policies externally? Please follow this
checklist.

- Is distribution of a policy truly needed? Send this policy and politely inform
  the customer that we do not distribute our policies out of security concerns.
  We think most will appreciate the candor. Moreover, we trust our customers,
  and we hope they trust us. We can freely fill out checklists affirming
  existence of certain policies, and this should be sufficient.

- Propose a conference call to audibly walk through the rough approach to the
  specific policy requests.

- Ask the specific purpose of each requested policy. Find appropriate
  alternatives where possible, and constrain the use of the policy review.

- Insist on a technical or subject matter expert for review of each policy.

- Never distribute more than 1 policy per request. Mass-sending multiple
  policies indicates that they likely aren't being properly reviewed.

- Remind customers of the confidential nature of our policies.

- Request immediate and documented deletion, including from email inboxes, of
  each distributed policy after the states purpose has been exhausted
