// THIS FILE IS GENERATED. PLEASE OPEN AN ISSUE IF YOU FIND A PROBLEM

import { Octokit } from "@octokit/core";

import { VERSION } from "./version";
import { endpointsToMethods } from "./endpoints-to-methods";

import ENDPOINTS_36 from "./generated/ghe-36-endpoints";
import ADMIN_ENDPOINTS_36 from "./generated/ghe-36-admin-endpoints";

import ENDPOINTS_37 from "./generated/ghe-37-endpoints";
import ADMIN_ENDPOINTS_37 from "./generated/ghe-37-admin-endpoints";

import ENDPOINTS_38 from "./generated/ghe-38-endpoints";
import ADMIN_ENDPOINTS_38 from "./generated/ghe-38-admin-endpoints";

import ENDPOINTS_39 from "./generated/ghe-39-endpoints";
import ADMIN_ENDPOINTS_39 from "./generated/ghe-39-admin-endpoints";

export function enterpriseServer36Admin(octokit: Octokit) {
  return endpointsToMethods(octokit, ADMIN_ENDPOINTS_36);
}
enterpriseServer36Admin.VERSION = VERSION;

export function enterpriseServer36(octokit: Octokit) {
  return endpointsToMethods(octokit, ENDPOINTS_36);
}
enterpriseServer36.VERSION = VERSION;

export function enterpriseServer37Admin(octokit: Octokit) {
  return endpointsToMethods(octokit, ADMIN_ENDPOINTS_37);
}
enterpriseServer37Admin.VERSION = VERSION;

export function enterpriseServer37(octokit: Octokit) {
  return endpointsToMethods(octokit, ENDPOINTS_37);
}
enterpriseServer37.VERSION = VERSION;

export function enterpriseServer38Admin(octokit: Octokit) {
  return endpointsToMethods(octokit, ADMIN_ENDPOINTS_38);
}
enterpriseServer38Admin.VERSION = VERSION;

export function enterpriseServer38(octokit: Octokit) {
  return endpointsToMethods(octokit, ENDPOINTS_38);
}
enterpriseServer38.VERSION = VERSION;

export function enterpriseServer39Admin(octokit: Octokit) {
  return endpointsToMethods(octokit, ADMIN_ENDPOINTS_39);
}
enterpriseServer39Admin.VERSION = VERSION;

export function enterpriseServer39(octokit: Octokit) {
  return endpointsToMethods(octokit, ENDPOINTS_39);
}
enterpriseServer39.VERSION = VERSION;
