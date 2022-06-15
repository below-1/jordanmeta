import { Octokit, App } from 'octokit';
import config from './config';

const octokit = new Octokit({ auth: config.GH_ACCESS_TOKEN });

export default octokit;
