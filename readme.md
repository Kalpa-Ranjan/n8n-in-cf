<p align="center">
  <img src="https://img.shields.io/badge/SAP_BTP-Cloud_Foundry-0A6ED1?style=for-the-badge&logo=sap&logoColor=white" alt="SAP BTP Cloud Foundry">
  <img src="https://img.shields.io/badge/n8n-workflow_automation-EA4B71?style=for-the-badge&logo=n8n&logoColor=white" alt="n8n">
  <img src="https://img.shields.io/badge/database-SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white" alt="SQLite">
</p>

<h1 align="center">n8n on SAP BTP</h1>

<p align="center">
  <b>Build workflows in the browser.</b><br>
  Every setup mints a brand-new link. Save it. That link is the door.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/01-Download-1565C0?style=for-the-badge" alt="01 Download">
  <img src="https://img.shields.io/badge/02-Sign_in-6A1B9A?style=for-the-badge" alt="02 Sign in">
  <img src="https://img.shields.io/badge/03-Deploy-EF6C00?style=for-the-badge" alt="03 Deploy">
  <img src="https://img.shields.io/badge/04-Open_your_link-2E7D32?style=for-the-badge" alt="04 Open your link">
</p>

```mermaid
%%{init: {'theme': 'base', 'themeVariables': {'primaryColor':'#E3F2FD','primaryTextColor':'#0D47A1','primaryBorderColor':'#1565C0','lineColor':'#EA4B71','secondaryColor':'#FCE4EC','tertiaryColor':'#E8F5E9','fontFamily':'trebuchet ms'}}}%%
flowchart LR
    A[Download the project] --> B[Sign in to Cloud Foundry]
    B --> C[Deploy]
    C --> D[A new link appears]
    D --> E[Create the owner account]
    E --> F[Build workflows]
```

<p align="center">
  <a href="#before-you-start"><img src="https://img.shields.io/badge/Before_you_start-0A6ED1?style=flat-square" alt="Before you start"></a>
  <a href="#set-it-up"><img src="https://img.shields.io/badge/Set_it_up-6A1B9A?style=flat-square" alt="Set it up"></a>
  <a href="#your-link"><img src="https://img.shields.io/badge/Your_link-EF6C00?style=flat-square" alt="Your link"></a>
  <a href="#first-visit"><img src="https://img.shields.io/badge/First_visit-2E7D32?style=flat-square" alt="First visit"></a>
  <a href="#keep-in-mind"><img src="https://img.shields.io/badge/Keep_in_mind-C62828?style=flat-square" alt="Keep in mind"></a>
</p>

---

## Before you start

Three tools, then one address from SAP BTP.

| | Get this | It is used to |
| :---: | --- | --- |
| <img src="https://img.shields.io/badge/1-1565C0?style=for-the-badge" alt="1"> | [Git](https://git-scm.com/downloads) | Download this project |
| <img src="https://img.shields.io/badge/2-6A1B9A?style=for-the-badge" alt="2"> | [Node.js 22](https://nodejs.org/) | Run the setup command |
| <img src="https://img.shields.io/badge/3-EF6C00?style=for-the-badge" alt="3"> | [Cloud Foundry CLI](https://docs.cloudfoundry.org/cf-cli/install-go-cli.html) | Send the app to SAP BTP |

> [!TIP]
> In the SAP BTP cockpit, open your subaccount and copy the **API endpoint**. It looks like `https://api.cf.us10-001.hana.ondemand.com`.

## Set it up

Open a terminal. Run the steps from top to bottom.

### <img src="https://img.shields.io/badge/Step_1-Download-1565C0?style=for-the-badge" alt="Step 1 Download">

```bash
git clone https://github.com/Kalpa-Ranjan/n8n-in-cf.git
cd n8n-in-cf
```

### <img src="https://img.shields.io/badge/Step_2-Sign_in-6A1B9A?style=for-the-badge" alt="Step 2 Sign in">

```bash
cf login -a https://api.cf.us10-001.hana.ondemand.com --sso
```

Use your own API endpoint if it is different.

1. The command prints a web address. Open it.
2. Sign in and copy the temporary code.
3. Paste the code into the terminal.
4. Choose your org and space.

### <img src="https://img.shields.io/badge/Step_3-Deploy-EF6C00?style=for-the-badge" alt="Step 3 Deploy">

```bash
npm run deploy
```

When it finishes, the last lines are your door:

```text
Your link:
https://my-n8n-platform-a1b2c3.cfapps.us10-001.hana.ondemand.com
```

<p align="center">
  <img src="https://img.shields.io/badge/my--n8n--platform-003B57?style=for-the-badge" alt="app name">
  <img src="https://img.shields.io/badge/-a1b2c3-2E7D32?style=for-the-badge" alt="new code">
  <img src="https://img.shields.io/badge/-cfapps.us10--001.hana.ondemand.com-0A6ED1?style=for-the-badge" alt="shared address">
</p>

<p align="center"><sub>App name · fresh code, different every setup · shared SAP address</sub></p>

> [!IMPORTANT]
> Save the whole link. The green code changes on the next setup, and the old link stops opening.

## Your link

```mermaid
%%{init: {'theme': 'base', 'themeVariables': {'primaryColor':'#E8F5E9','primaryTextColor':'#1B5E20','primaryBorderColor':'#2E7D32','lineColor':'#EF6C00','fontFamily':'trebuchet ms'}}}%%
flowchart TD
    S[You set up the app] --> N[A new link is created]
    N --> K[Save it and use it next time]
    S2[You set it up again] --> X[The previous link stops opening]
    S2 --> N2[A different link is created]
```

| Moment | What you do |
| --- | --- |
| <img src="https://img.shields.io/badge/Setup-2E7D32?style=flat-square" alt="Setup"> | Copy the new link from the terminal |
| <img src="https://img.shields.io/badge/Later-1565C0?style=flat-square" alt="Later"> | Open that same link |
| <img src="https://img.shields.io/badge/Setup_again-EF6C00?style=flat-square" alt="Setup again"> | Use the new link. Leave the old one behind |

## First visit

<p align="center">
  <img src="https://img.shields.io/badge/1-Open_the_new_link-1565C0?style=for-the-badge" alt="1 Open the new link">
  <img src="https://img.shields.io/badge/2-Create_the_owner_account-6A1B9A?style=for-the-badge" alt="2 Create the owner account">
  <img src="https://img.shields.io/badge/3-Keep_the_password-2E7D32?style=for-the-badge" alt="3 Keep the password">
</p>

Use your email and a password you will remember. The next visit is the same link, then that email and password.

## Keep in mind

| Topic | What it means |
| --- | --- |
| <img src="https://img.shields.io/badge/Your_work-C62828?style=flat-square" alt="Your work"> | Workflows and saved passwords stay only while this setup is running |
| <img src="https://img.shields.io/badge/New_setup-EF6C00?style=flat-square" alt="New setup"> | Clears that work and gives you a different link |
| <img src="https://img.shields.io/badge/Restart-EF6C00?style=flat-square" alt="Restart"> | Clears that work too. Create it again afterward |
| <img src="https://img.shields.io/badge/Your_link-1565C0?style=flat-square" alt="Your link"> | Anyone who has it can open the page. Share it only with people who should use it |
| <img src="https://img.shields.io/badge/Other_people-6A1B9A?style=flat-square" alt="Other people"> | Their setup gets its own link. Yours does not open their app |

> [!WARNING]
> A new setup, or a restart, clears your workflows and saved passwords.
