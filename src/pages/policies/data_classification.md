---
path: "/policies/data_classification"
title: "Data Classification"
date: 2018-11-18T12:33:46+10:00
image: "images/mika-baumeister-Wpnoqo2plFA-unsplash.jpg"
sortField: 610
---

Versionista is in a unique position when it comes to data classification. This
is because we must classify both the information we store, as well as
information we access as part of our crawling and monitoring of web sources. For
simplification, we use the same criteria to classify both sources.

- Five base classes of data are defined by Versionista:

  - High Risk
  - Sensitive
  - Sensitive Data Collection
  - Internal
  - Expressly Public

- As well, there are two overlapping "protected" classes:

  - Personally Identifiable Information (PII)
  - Protected Health Information (PHI) Data

- In addition, there are four overlapping accessibility classes:

  - Machine available
  - Publicly available
  - Consent required
  - Authentication required

# Base classes of data

## High Risk Data

High Risk Data is a class of information that, if disclosed or modified without
authorization, would have severe adverse effect on the operations, assets, or
reputation of Versionista, or Versionista’s obligations concerning information
privacy. Information in this class includes, but is not limited to:

- Information assets for which there are legal requirements for preventing
  disclosure or financial penalties for disclosure, such as credit card
  information (covered by the Payment Card Industry Data Security Standard (PCI
  DSS) ).
- Information covered by federal and state legislation, such as the federal
  Health Insurance Portability and Accountability Act (HIPAA) or associated
  state-mandated PHI.
- Payroll, personnel, and financial information with special privacy
  requirements.

## Sensitive Data

Sensitive Data is a class of information that, if disclosed or modified without
authorization, would have serious adverse effect on the operations, assets, or
reputation of Versionista, or Versionista’s obligations concerning information
privacy. Information that is covered by FERPA, Non-Disclosure Agreements (NDAs),
and other intellectual property are, as a minimum, in this class.

Note: Non-Disclosure Agreements may fall into the High Risk Data or Sensitive
Data categories and should be individually evaluated.

## Sensitive Data Collection

In addition to these classifications, we create a further distinction in
Sensitive Data classification:

A Sensitive Data Collection is a collection of Sensitive Data that results from
compiling (i.e., collecting) the Sensitive Data from multiple sources.

Where a requirement is given for Sensitive Data, the same requirements apply to
Sensitive Data Collections as a minimum threshold. Sensitive Data Collections
are specifically identified in this program where a more restrictive or
extensive requirement is applied to a Sensitive Data Collection than Sensitive
Data.

## Internal Data

Internal Data is a class of information that, if disclosed or modified without
authorization, would have moderate adverse effect on the operations, assets, or
reputation of Versionista, or Versionista’s obligations concerning information
privacy.

## Expressly Public Data

Expressly Public Data is a class of information intended for public use that,
when used as intended, would have no adverse effect on the operations, assets,
or reputation of Versionista, or Versionista’s obligations concerning
information privacy.

# Protected classes of data

## Personally Identifiable Information (PII) Data

Personally Identifiable Information (PII) Data is any information about an
individual, including (1) any information that can be used to distinguish or
trace an individual‘s identity, such as name, social security number, date and
place of birth, mother‘s maiden name, or biometric records; and (2) any other
information that is linked or linkable to an individual, such as medical,
educational, financial, and employment information.

At a minimum, Personally Identifiable Information (PII) must be treated as
Internal Data, and elements of PII may be classified as Sensitive, Confidential,
or High Risk Data.

## Protected Health Information (PHI) Data

Protected health information “Relates to the past, present, or future physical
or mental health or condition of an individual; the provision of health care to
an individual; or the past, present, or future payment for the provision of
health care to an individual” that is:

- Transmitted by electronic media;
- Maintained in electronic media; or
- Transmitted or maintained in any other form or medium.

Protected health information includes all individually identifiable health
information, including demographic data, medical histories, test results,
insurance information, and other information used to identify a patient or
provide healthcare services or healthcare coverage. ‘Protected’ means the
information is protected under the HIPAA Privacy Rule.

Protected health information is defined in the Code of Federal Regulations and
applies to health records, but not education records which are covered by other
federal regulations, and neither records held by a HIPAA-covered entity related
to its role as an employer. In the case of an employee-patient, protected health
information does not include information held on the employee by a covered
entity in its role as an employer, only in its role as a healthcare provider.

PHI does not include individually identifiable health information of persons who
have been deceased for more than 50 years.

# Accessible classes of data

## Machine available

Infromation is "machine available" when it is publicly available with no
obviously apparent legal, policy, or technological blocks to automated machine
access, including Terms of Service prohibitions, robots.txt restrictions, or Web
Application Firewall limitations.

## Publicly available

Information is "publicly available" when it is readily reachable by the average
human user utilizing average browser technology and when this information does
not require any additional authentication or other steps to access.

## Consent required

Information is "consent required" when any affirmative consent, agreement, or
interaction is required to access otherwise publicly available information.
Examples of this include information that requires affirmitive cookie consent,
terms of use agreements, or any other common modal consent forms.

## Authentication required

Information is "authentication required" when access is limited to only users
with access credentials including, but not limited to, username and password
combinations, associated third-party login information (such as Facebook,
LinkedIn, Twitter, or other OAuth providers), or other technological means to
limit access to only a certain set of users. Included in this information are
sites which are occasionally publicly available, such as newspapers or other
media that allow limited access prior to requiring full authentication.
