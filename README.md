# Proposing Changes to SHAKEN AS & VS RESTful APIs

## Introduction

A call Authentication Service (AS) and Verification Service (VS) are defined in IETF RFC 8224 specification and embodied in the ATIS SHAKEN framework (ATIS-1000074).  This specification and framework is used to securely compute, transit and verify SIP Identity headers as part of caller identity authentication. 

This document contains the APIs that are available for AS and VS in OpenAPI Specification (OAS) format.

OAS defines a standard, language-agnostic interface to RESTful APIs which allows both humans and computers to discover and understand the capabilities of the service without access to source code, documentation, or through network traffic inspection. When properly defined, a consumer can understand and interact with the remote service with a minimal amount of implementation logic.

This document describes the process for proposing, documenting, and implementing changes to the SHAKEN AS & VS API project. 

In the spirit of being a public API, we've chosen to publicize the generators that create our documentation. By doing this we hope to be more transparent when making changes and provide a gateway for our consumers to become contributors.

## The Proposal Process

The proposal process is for reviewing a proposal and reaching
a decision about whether to accept or decline the proposal.

1. The proposal author [creates a brief issue](https://github.com/neustar/tcs-apis/issues) describing the proposal.
   Note: There is no need for a design document at this point.
   Note: A non-proposal issue can be turned into a proposal by simply adding the proposal label.

2. A discussion on the issue tracker aims to triage the proposal into one of three outcomes:
     - Accept proposal,
     - decline proposal, or
     - ask for a design doc.

   If the proposal is accepted or declined, the process is done.
   Otherwise the discussion is expected to identify concerns that
   should be addressed in a more detailed design.

3. The proposal author writes a design doc to work out details of the proposed
   design and addresses the concerns raised in the initial discussion.

4. Once comments and revisions on the design doc wind down, there is a final
   discussion on the issue to reach one of two outcomes:
    - Accept proposal or
    - decline proposal.

After the proposal is accepted or declined (whether after step 2 or step 4),
implementation work proceeds in the same way as any other contribution.

## Additional Details

### Goals

- Make sure that proposals get a proper, fair, timely, recorded evaluation with
  a clear answer.
- Make past proposals easy to find to avoid duplicated effort.
- If a design doc is needed, make sure contributors know how to write a good one.

### Definitions

- A **proposal** is a suggestion filed as a GitHub issue, identified by having
  the proposal label.
- A **design doc** is the expanded form of a proposal, written when the
  proposal needs more careful explanation and consideration.

### Scope

The proposal process should be used for any notable change or addition to the
language, libraries and/or tools.
Since proposals begin (and will often end) with the filing of an issue, even
small changes can go through the proposal process if appropriate.
Deciding what is appropriate is a matter of judgment and will be refined through
experience.
If in doubt, file a proposal.

### Design Documents

As noted above, some (but not all) proposals need to be elaborated in a design document.

### Quick Start for Experienced Committers

Experienced committers who are certain that a design doc will be
required for a particular proposal
can skip steps 1 and 2 and include the design doc with the initial issue.

In the worst case, skipping these steps only leads to an unnecessary design doc.

### Proposal Review

A group of team members holds “proposal review meetings”
approximately weekly to review pending proposals.

The principal goal of the review meeting is to make sure that proposals
are receiving attention from the right people
by including relevant developers, raising important questions,
pinging lapsed discussions, and generally trying to guide discussion
towards agreement about the outcome.
The discussion itself is expected to happen on the issue tracker
so that anyone can take part.

The proposal review meetings also identify issues where
consensus has been reached and the process can be
advanced to the next step (by marking the proposal accepted
or declined, or by asking for a design doc).

## Project Enhancements

Enhancements to the SHAKEN AS & VS API project itself are ongoing and
can also be submitted through the proposal process.

## Running tcs-apis locally

   1. We can run the tcs-apis package locally using [npm](https://redoc.ly/docs/redoc/quickstart/cli/) package manager
   2. Clone this repository
      ```
      git clone git@github.com:neustar/tcs-apis.git
      ```
   2. ```
      cd tcs-apis
      ```
   3. ```
      npm install
      ```
    
   4. ```
      npm start
      ```
   5. The preview starts on port 9090, and can be accessed at http://localhost:9090. To exit the preview, use ```control+C```