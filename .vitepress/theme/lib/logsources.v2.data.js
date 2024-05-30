export default {
  async load() {
    return Promise.resolve({
      logsources: [
        {
          title: "AWS - Cloudtrail",
          yaml: "logsource:\n  product: aws\n  service: cloudtrail\n",
          logsource: { product: "aws", service: "cloudtrail" },
          tags: ["aws", "cloudtrail"],
        },
        {
          title: "Antivirus",
          yaml: "logsource:\n  category: antivirus\n",
          logsource: { category: "antivirus" },
          tags: ["antivirus"],
        },
        {
          title: "Apache",
          yaml: "logsource:\n  service: apache\n",
          logsource: { service: "apache" },
          tags: ["apache"],
        },
        {
          title: "Azure - Activity Logs",
          yaml: "logsource:\n  product: azure\n  service: activitylogs\n",
          logsource: { product: "azure", service: "activitylogs" },
          tags: ["activity", "activitylogs", "azure", "logs"],
        },
        {
          title: "Azure - Auditlogs",
          yaml: "logsource:\n  product: azure\n  service: auditlogs\n",
          logsource: { product: "azure", service: "auditlogs" },
          tags: ["auditlogs", "azure"],
        },
        {
          title: "Azure - Azure Activity",
          yaml: "logsource:\n  product: azure\n  service: azureactivity\n",
          logsource: { product: "azure", service: "azureactivity" },
          tags: ["activity", "azure", "azureactivity"],
        },
        {
          title: "Azure - Signinlogs",
          yaml: "logsource:\n  product: azure\n  service: signinlogs\n",
          logsource: { product: "azure", service: "signinlogs" },
          tags: ["azure", "signinlogs"],
        },
        {
          title: "Cisco - Aaa - Accounting",
          yaml: "logsource:\n  category: accounting\n  product: cisco\n  service: aaa\n",
          logsource: {
            category: "accounting",
            product: "cisco",
            service: "aaa",
          },
          tags: ["aaa", "accounting", "cisco"],
        },
        {
          title: "DNS",
          yaml: "logsource:\n  category: dns\n",
          logsource: { category: "dns" },
          tags: ["dns"],
        },
        {
          title: "Django - Application",
          yaml: "logsource:\n  category: application\n  product: django\n",
          logsource: { category: "application", product: "django" },
          tags: ["application", "django"],
        },
        {
          title: "Firewall",
          yaml: "logsource:\n  category: firewall\n",
          logsource: { category: "firewall" },
          tags: ["firewall"],
        },
        {
          title: "Google Cloud Platform - Google Cloud Platform.Audit",
          yaml: "logsource:\n  product: gcp\n  service: gcp.audit\n",
          logsource: { service: "gcp.audit", product: "gcp" },
          tags: [
            "cloud",
            "gcp",
            "gcp.audit",
            "google",
            "platform",
            "platform.audit",
          ],
        },
        {
          title: "Google Workspace - Google Workspace.Admin",
          yaml: "logsource:\n  product: google_workspace\n  service: google_workspace.admin\n",
          logsource: {
            service: "google_workspace.admin",
            product: "google_workspace",
          },
          tags: [
            "google",
            "google_workspace",
            "google_workspace.admin",
            "workspace",
            "workspace.admin",
          ],
        },
        {
          title: "Linux",
          yaml: "logsource:\n  product: linux\n",
          logsource: { product: "linux" },
          tags: ["linux"],
        },
        {
          title: "Linux - Auditd",
          yaml: "logsource:\n  product: linux\n  service: auditd\n",
          logsource: { product: "linux", service: "auditd" },
          tags: ["auditd", "linux"],
        },
        {
          title: "Linux - Auth",
          yaml: "logsource:\n  product: linux\n  service: auth\n",
          logsource: { product: "linux", service: "auth" },
          tags: ["auth", "linux"],
        },
        {
          title: "Linux - Clamav",
          yaml: "logsource:\n  product: linux\n  service: clamav\n",
          logsource: { product: "linux", service: "clamav" },
          tags: ["clamav", "linux"],
        },
        {
          title: "Linux - Cron",
          yaml: "logsource:\n  product: linux\n  service: cron\n",
          logsource: { product: "linux", service: "cron" },
          tags: ["cron", "linux"],
        },
        {
          title: "Linux - File Create",
          yaml: "logsource:\n  category: file_create\n  product: linux\n",
          logsource: { product: "linux", category: "file_create" },
          tags: ["create", "file", "file_create", "linux"],
        },
        {
          title: "Linux - Guacamole",
          yaml: "logsource:\n  product: linux\n  service: guacamole\n",
          logsource: { product: "linux", service: "guacamole" },
          tags: ["guacamole", "linux"],
        },
        {
          title: "Linux - Modsecurity",
          yaml: "logsource:\n  product: linux\n  service: modsecurity\n",
          logsource: { product: "linux", service: "modsecurity" },
          tags: ["linux", "modsecurity"],
        },
        {
          title: "Linux - Network Connection",
          yaml: "logsource:\n  category: network_connection\n  product: linux\n",
          logsource: { product: "linux", category: "network_connection" },
          tags: ["connection", "linux", "network", "network_connection"],
        },
        {
          title: "Linux - Process Creation",
          yaml: "logsource:\n  category: process_creation\n  product: linux\n",
          logsource: { product: "linux", category: "process_creation" },
          tags: ["creation", "linux", "process", "process_creation"],
        },
        {
          title: "Linux - Sshd",
          yaml: "logsource:\n  product: linux\n  service: sshd\n",
          logsource: { product: "linux", service: "sshd" },
          tags: ["linux", "sshd"],
        },
        {
          title: "Linux - Sudo",
          yaml: "logsource:\n  product: linux\n  service: sudo\n",
          logsource: { product: "linux", service: "sudo" },
          tags: ["linux", "sudo"],
        },
        {
          title: "Linux - Syslog",
          yaml: "logsource:\n  product: linux\n  service: syslog\n",
          logsource: { product: "linux", service: "syslog" },
          tags: ["linux", "syslog"],
        },
        {
          title: "Linux - Vsftpd",
          yaml: "logsource:\n  product: linux\n  service: vsftpd\n",
          logsource: { product: "linux", service: "vsftpd" },
          tags: ["linux", "vsftpd"],
        },
        {
          title: "Microsoft 365 - Exchange",
          yaml: "logsource:\n  product: m365\n  service: exchange\n",
          logsource: { product: "m365", service: "exchange" },
          tags: ["365", "exchange", "m365", "microsoft"],
        },
        {
          title: "Microsoft 365 - Threat Detection",
          yaml: "logsource:\n  product: m365\n  service: threat_detection\n",
          logsource: { service: "threat_detection", product: "m365" },
          tags: [
            "365",
            "detection",
            "m365",
            "microsoft",
            "threat",
            "threat_detection",
          ],
        },
        {
          title: "Microsoft 365 - Threat Management",
          yaml: "logsource:\n  product: m365\n  service: threat_management\n",
          logsource: { service: "threat_management", product: "m365" },
          tags: [
            "365",
            "m365",
            "management",
            "microsoft",
            "threat",
            "threat_management",
          ],
        },
        {
          title: "Microsoft 365 Portal - Auditlogs",
          yaml: "logsource:\n  product: microsoft365portal\n  service: auditlogs\n",
          logsource: { product: "microsoft365portal", service: "auditlogs" },
          tags: [
            "365",
            "auditlogs",
            "microsoft",
            "microsoft365portal",
            "portal",
          ],
        },
        {
          title: "Netflow",
          yaml: "logsource:\n  service: netflow\n",
          logsource: { service: "netflow" },
          tags: ["netflow"],
        },
        {
          title: "Okta - Okta",
          yaml: "logsource:\n  product: okta\n  service: okta\n",
          logsource: { service: "okta", product: "okta" },
          tags: ["okta"],
        },
        {
          title: "OneLogin - OneLogin.Events",
          yaml: "logsource:\n  product: onelogin\n  service: onelogin.events\n",
          logsource: { product: "onelogin", service: "onelogin.events" },
          tags: ["onelogin", "onelogin.events"],
        },
        {
          title: "Proxy",
          yaml: "logsource:\n  category: proxy\n",
          logsource: { category: "proxy" },
          tags: ["proxy"],
        },
        {
          title: "Python - Application",
          yaml: "logsource:\n  category: application\n  product: python\n",
          logsource: { category: "application", product: "python" },
          tags: ["application", "python"],
        },
        {
          title: "Qualys",
          yaml: "logsource:\n  product: qualys\n",
          logsource: { product: "qualys" },
          tags: ["qualys"],
        },
        {
          title: "Rpc Firewall - Application",
          yaml: "logsource:\n  category: application\n  product: rpc_firewall\n",
          logsource: { category: "application", product: "rpc_firewall" },
          tags: ["application", "firewall", "rpc", "rpc_firewall"],
        },
        {
          title: "Ruby On Rails - Application",
          yaml: "logsource:\n  category: application\n  product: ruby_on_rails\n",
          logsource: { category: "application", product: "ruby_on_rails" },
          tags: ["application", "on", "rails", "ruby", "ruby_on_rails"],
        },
        {
          title: "SQL - Application",
          yaml: "logsource:\n  category: application\n  product: sql\n",
          logsource: { category: "application", product: "sql" },
          tags: ["application", "sql"],
        },
        {
          title: "Spring - Application",
          yaml: "logsource:\n  category: application\n  product: spring\n",
          logsource: { product: "spring", category: "application" },
          tags: ["application", "spring"],
        },
        {
          title: "Webserver",
          yaml: "logsource:\n  category: webserver\n",
          logsource: { category: "webserver" },
          tags: ["webserver"],
        },
        {
          title: "Windows",
          yaml: "logsource:\n  product: windows\n",
          logsource: { product: "windows" },
          tags: ["windows"],
        },
        {
          title: "Windows - Application",
          yaml: "logsource:\n  product: windows\n  service: application\n",
          logsource: { product: "windows", service: "application" },
          tags: ["application", "windows"],
        },
        {
          title: "Windows - Applocker",
          yaml: "logsource:\n  product: windows\n  service: applocker\n",
          logsource: { service: "applocker", product: "windows" },
          tags: ["applocker", "windows"],
        },
        {
          title: "Windows - Bits Client",
          yaml: "logsource:\n  product: windows\n  service: bits-client\n",
          logsource: { product: "windows", service: "bits-client" },
          tags: ["bits", "bits-client", "client", "windows"],
        },
        {
          title: "Windows - Codeintegrity Operational",
          yaml: "logsource:\n  product: windows\n  service: codeintegrity-operational\n",
          logsource: {
            product: "windows",
            service: "codeintegrity-operational",
          },
          tags: [
            "codeintegrity",
            "codeintegrity-operational",
            "operational",
            "windows",
          ],
        },
        {
          title: "Windows - Create Remote Thread",
          yaml: "logsource:\n  category: create_remote_thread\n  product: windows\n",
          logsource: { category: "create_remote_thread", product: "windows" },
          tags: [
            "create",
            "create_remote_thread",
            "remote",
            "thread",
            "windows",
          ],
        },
        {
          title: "Windows - Create Stream Hash",
          yaml: "logsource:\n  category: create_stream_hash\n  product: windows\n",
          logsource: { product: "windows", category: "create_stream_hash" },
          tags: ["create", "create_stream_hash", "hash", "stream", "windows"],
        },
        {
          title: "Windows - DNS Query",
          yaml: "logsource:\n  category: dns_query\n  product: windows\n",
          logsource: { product: "windows", category: "dns_query" },
          tags: ["dns", "dns_query", "query", "windows"],
        },
        {
          title: "Windows - DNS Server",
          yaml: "logsource:\n  product: windows\n  service: dns-server\n",
          logsource: { service: "dns-server", product: "windows" },
          tags: ["dns", "dns-server", "server", "windows"],
        },
        {
          title: "Windows - Diagnosis Scripted",
          yaml: "logsource:\n  product: windows\n  service: diagnosis-scripted\n",
          logsource: { product: "windows", service: "diagnosis-scripted" },
          tags: ["diagnosis", "diagnosis-scripted", "scripted", "windows"],
        },
        {
          title: "Windows - Driver Framework",
          yaml: "logsource:\n  product: windows\n  service: driver-framework\n",
          logsource: { service: "driver-framework", product: "windows" },
          tags: ["driver", "driver-framework", "framework", "windows"],
        },
        {
          title: "Windows - Driver Load",
          yaml: "logsource:\n  category: driver_load\n  product: windows\n",
          logsource: { category: "driver_load", product: "windows" },
          tags: ["driver", "driver_load", "load", "windows"],
        },
        {
          title: "Windows - File Access",
          yaml: "logsource:\n  category: file_access\n  product: windows\n",
          logsource: { product: "windows", category: "file_access" },
          tags: ["access", "file", "file_access", "windows"],
        },
        {
          title: "Windows - File Block",
          yaml: "logsource:\n  category: file_block\n  product: windows\n",
          logsource: { category: "file_block", product: "windows" },
          tags: ["block", "file", "file_block", "windows"],
        },
        {
          title: "Windows - File Change",
          yaml: "logsource:\n  category: file_change\n  product: windows\n",
          logsource: { product: "windows", category: "file_change" },
          tags: ["change", "file", "file_change", "windows"],
        },
        {
          title: "Windows - File Delete",
          yaml: "logsource:\n  category: file_delete\n  product: windows\n",
          logsource: { product: "windows", category: "file_delete" },
          tags: ["delete", "file", "file_delete", "windows"],
        },
        {
          title: "Windows - File Event",
          yaml: "logsource:\n  category: file_event\n  product: windows\n",
          logsource: { category: "file_event", product: "windows" },
          tags: ["event", "file", "file_event", "windows"],
        },
        {
          title: "Windows - File Rename",
          yaml: "logsource:\n  category: file_rename\n  product: windows\n",
          logsource: { product: "windows", category: "file_rename" },
          tags: ["file", "file_rename", "rename", "windows"],
        },
        {
          title: "Windows - Firewall As",
          yaml: "logsource:\n  product: windows\n  service: firewall-as\n",
          logsource: { service: "firewall-as", product: "windows" },
          tags: ["as", "firewall", "firewall-as", "windows"],
        },
        {
          title: "Windows - Image Load",
          yaml: "logsource:\n  category: image_load\n  product: windows\n",
          logsource: { category: "image_load", product: "windows" },
          tags: ["image", "image_load", "load", "windows"],
        },
        {
          title: "Windows - Ldap Debug",
          yaml: "logsource:\n  product: windows\n  service: ldap_debug\n",
          logsource: { service: "ldap_debug", product: "windows" },
          tags: ["debug", "ldap", "ldap_debug", "windows"],
        },
        {
          title: "Windows - Microsoft Servicebus Client",
          yaml: "logsource:\n  product: windows\n  service: microsoft-servicebus-client\n",
          logsource: {
            product: "windows",
            service: "microsoft-servicebus-client",
          },
          tags: [
            "client",
            "microsoft",
            "microsoft-servicebus-client",
            "servicebus",
            "windows",
          ],
        },
        {
          title: "Windows - Msexchange Management",
          yaml: "logsource:\n  product: windows\n  service: msexchange-management\n",
          logsource: { service: "msexchange-management", product: "windows" },
          tags: [
            "management",
            "msexchange",
            "msexchange-management",
            "windows",
          ],
        },
        {
          title: "Windows - Network Connection",
          yaml: "logsource:\n  category: network_connection\n  product: windows\n",
          logsource: { product: "windows", category: "network_connection" },
          tags: ["connection", "network", "network_connection", "windows"],
        },
        {
          title: "Windows - Ntlm",
          yaml: "logsource:\n  product: windows\n  service: ntlm\n",
          logsource: { product: "windows", service: "ntlm" },
          tags: ["ntlm", "windows"],
        },
        {
          title: "Windows - OpenSSH",
          yaml: "logsource:\n  product: windows\n  service: openssh\n",
          logsource: { service: "openssh", product: "windows" },
          tags: ["openssh", "windows"],
        },
        {
          title: "Windows - Pipe Created",
          yaml: "logsource:\n  category: pipe_created\n  product: windows\n",
          logsource: { product: "windows", category: "pipe_created" },
          tags: ["created", "pipe", "pipe_created", "windows"],
        },
        {
          title: "Windows - Powershell",
          yaml: "logsource:\n  product: windows\n  service: powershell\n",
          logsource: { service: "powershell", product: "windows" },
          tags: ["powershell", "windows"],
        },
        {
          title: "Windows - Powershell Classic",
          yaml: "logsource:\n  product: windows\n  service: powershell-classic\n",
          logsource: { service: "powershell-classic", product: "windows" },
          tags: ["classic", "powershell", "powershell-classic", "windows"],
        },
        {
          title: "Windows - Powershell Classic Provider Start",
          yaml: "logsource:\n  category: ps_classic_provider_start\n  product: windows\n",
          logsource: {
            category: "ps_classic_provider_start",
            product: "windows",
          },
          tags: [
            "classic",
            "powershell",
            "provider",
            "ps_classic_provider_start",
            "start",
            "windows",
          ],
        },
        {
          title: "Windows - Powershell Classic Start",
          yaml: "logsource:\n  category: ps_classic_start\n  product: windows\n",
          logsource: { category: "ps_classic_start", product: "windows" },
          tags: [
            "classic",
            "powershell",
            "ps_classic_start",
            "start",
            "windows",
          ],
        },
        {
          title: "Windows - Powershell Module",
          yaml: "logsource:\n  category: ps_module\n  product: windows\n",
          logsource: { product: "windows", category: "ps_module" },
          tags: ["module", "powershell", "ps_module", "windows"],
        },
        {
          title: "Windows - Powershell Script",
          yaml: "logsource:\n  category: ps_script\n  product: windows\n",
          logsource: { product: "windows", category: "ps_script" },
          tags: ["powershell", "ps_script", "script", "windows"],
        },
        {
          title: "Windows - Printservice Admin",
          yaml: "logsource:\n  product: windows\n  service: printservice-admin\n",
          logsource: { product: "windows", service: "printservice-admin" },
          tags: ["admin", "printservice", "printservice-admin", "windows"],
        },
        {
          title: "Windows - Printservice Operational",
          yaml: "logsource:\n  product: windows\n  service: printservice-operational\n",
          logsource: {
            product: "windows",
            service: "printservice-operational",
          },
          tags: [
            "operational",
            "printservice",
            "printservice-operational",
            "windows",
          ],
        },
        {
          title: "Windows - Process Access",
          yaml: "logsource:\n  category: process_access\n  product: windows\n",
          logsource: { product: "windows", category: "process_access" },
          tags: ["access", "process", "process_access", "windows"],
        },
        {
          title: "Windows - Process Creation",
          yaml: "logsource:\n  category: process_creation\n  product: windows\n",
          logsource: { category: "process_creation", product: "windows" },
          tags: ["creation", "process", "process_creation", "windows"],
        },
        {
          title: "Windows - Process Tampering",
          yaml: "logsource:\n  category: process_tampering\n  product: windows\n",
          logsource: { product: "windows", category: "process_tampering" },
          tags: ["process", "process_tampering", "tampering", "windows"],
        },
        {
          title: "Windows - Raw Access Thread",
          yaml: "logsource:\n  category: raw_access_thread\n  product: windows\n",
          logsource: { product: "windows", category: "raw_access_thread" },
          tags: ["access", "raw", "raw_access_thread", "thread", "windows"],
        },
        {
          title: "Windows - Registry Add",
          yaml: "logsource:\n  category: registry_add\n  product: windows\n",
          logsource: { category: "registry_add", product: "windows" },
          tags: ["add", "registry", "registry_add", "windows"],
        },
        {
          title: "Windows - Registry Delete",
          yaml: "logsource:\n  category: registry_delete\n  product: windows\n",
          logsource: { category: "registry_delete", product: "windows" },
          tags: ["delete", "registry", "registry_delete", "windows"],
        },
        {
          title: "Windows - Registry Event",
          yaml: "logsource:\n  category: registry_event\n  product: windows\n",
          logsource: { category: "registry_event", product: "windows" },
          tags: ["event", "registry", "registry_event", "windows"],
        },
        {
          title: "Windows - Registry Set",
          yaml: "logsource:\n  category: registry_set\n  product: windows\n",
          logsource: { product: "windows", category: "registry_set" },
          tags: ["registry", "registry_set", "set", "windows"],
        },
        {
          title: "Windows - Security",
          yaml: "logsource:\n  product: windows\n  service: security\n",
          logsource: { product: "windows", service: "security" },
          tags: ["security", "windows"],
        },
        {
          title: "Windows - Security",
          yaml: "logsource:\n  category: security\n  product: windows\n",
          logsource: { category: "security", product: "windows" },
          tags: ["security", "windows"],
        },
        {
          title: "Windows - Security Mitigations",
          yaml: "logsource:\n  product: windows\n  service: security-mitigations\n",
          logsource: { service: "security-mitigations", product: "windows" },
          tags: ["mitigations", "security", "security-mitigations", "windows"],
        },
        {
          title: "Windows - Shell Core",
          yaml: "logsource:\n  product: windows\n  service: shell-core\n",
          logsource: { product: "windows", service: "shell-core" },
          tags: ["core", "shell", "shell-core", "windows"],
        },
        {
          title: "Windows - Smbclient Security",
          yaml: "logsource:\n  product: windows\n  service: smbclient-security\n",
          logsource: { service: "smbclient-security", product: "windows" },
          tags: ["security", "smbclient", "smbclient-security", "windows"],
        },
        {
          title: "Windows - Sysmon",
          yaml: "logsource:\n  product: windows\n  service: sysmon\n",
          logsource: { product: "windows", service: "sysmon" },
          tags: ["sysmon", "windows"],
        },
        {
          title: "Windows - Sysmon Error",
          yaml: "logsource:\n  category: sysmon_error\n  product: windows\n",
          logsource: { category: "sysmon_error", product: "windows" },
          tags: ["error", "sysmon", "sysmon_error", "windows"],
        },
        {
          title: "Windows - Sysmon Status",
          yaml: "logsource:\n  category: sysmon_status\n  product: windows\n",
          logsource: { product: "windows", category: "sysmon_status" },
          tags: ["status", "sysmon", "sysmon_status", "windows"],
        },
        {
          title: "Windows - System",
          yaml: "logsource:\n  product: windows\n  service: system\n",
          logsource: { service: "system", product: "windows" },
          tags: ["system", "windows"],
        },
        {
          title: "Windows - System",
          yaml: "logsource:\n  category: system\n  product: windows\n",
          logsource: { category: "system", product: "windows" },
          tags: ["system", "windows"],
        },
        {
          title: "Windows - Taskscheduler",
          yaml: "logsource:\n  product: windows\n  service: taskscheduler\n",
          logsource: { product: "windows", service: "taskscheduler" },
          tags: ["taskscheduler", "windows"],
        },
        {
          title: "Windows - Terminalservices Localsessionmanager",
          yaml: "logsource:\n  product: windows\n  service: terminalservices-localsessionmanager\n",
          logsource: {
            service: "terminalservices-localsessionmanager",
            product: "windows",
          },
          tags: [
            "localsessionmanager",
            "terminalservices",
            "terminalservices-localsessionmanager",
            "windows",
          ],
        },
        {
          title: "Windows - WMI",
          yaml: "logsource:\n  product: windows\n  service: wmi\n",
          logsource: { service: "wmi", product: "windows" },
          tags: ["windows", "wmi"],
        },
        {
          title: "Windows - WMI Event",
          yaml: "logsource:\n  category: wmi_event\n  product: windows\n",
          logsource: { category: "wmi_event", product: "windows" },
          tags: ["event", "windows", "wmi", "wmi_event"],
        },
        {
          title: "Windows - Webserver",
          yaml: "logsource:\n  category: webserver\n  product: windows\n",
          logsource: { category: "webserver", product: "windows" },
          tags: ["webserver", "windows"],
        },
        {
          title: "Windows - Windefend",
          yaml: "logsource:\n  product: windows\n  service: windefend\n",
          logsource: { service: "windefend", product: "windows" },
          tags: ["windefend", "windows"],
        },
        {
          title: "Zeek - DNS",
          yaml: "logsource:\n  product: zeek\n  service: dns\n",
          logsource: { product: "zeek", service: "dns" },
          tags: ["dns", "zeek"],
        },
        {
          title: "Zeek - Dce Rpc",
          yaml: "logsource:\n  product: zeek\n  service: dce_rpc\n",
          logsource: { service: "dce_rpc", product: "zeek" },
          tags: ["dce", "dce_rpc", "rpc", "zeek"],
        },
        {
          title: "Zeek - Http",
          yaml: "logsource:\n  product: zeek\n  service: http\n",
          logsource: { product: "zeek", service: "http" },
          tags: ["http", "zeek"],
        },
        {
          title: "Zeek - Kerberos",
          yaml: "logsource:\n  product: zeek\n  service: kerberos\n",
          logsource: { product: "zeek", service: "kerberos" },
          tags: ["kerberos", "zeek"],
        },
        {
          title: "Zeek - RDP",
          yaml: "logsource:\n  product: zeek\n  service: rdp\n",
          logsource: { service: "rdp", product: "zeek" },
          tags: ["rdp", "zeek"],
        },
        {
          title: "Zeek - Smb Files",
          yaml: "logsource:\n  product: zeek\n  service: smb_files\n",
          logsource: { product: "zeek", service: "smb_files" },
          tags: ["files", "smb", "smb_files", "zeek"],
        },
        {
          title: "Zeek - X509",
          yaml: "logsource:\n  product: zeek\n  service: x509\n",
          logsource: { service: "x509", product: "zeek" },
          tags: ["x509", "zeek"],
        },
        {
          title: "macOS - File Event",
          yaml: "logsource:\n  category: file_event\n  product: macos\n",
          logsource: { category: "file_event", product: "macos" },
          tags: ["event", "file", "file_event", "macos"],
        },
        {
          title: "macOS - Process Creation",
          yaml: "logsource:\n  category: process_creation\n  product: macos\n",
          logsource: { product: "macos", category: "process_creation" },
          tags: ["creation", "macos", "process", "process_creation"],
        },
      ],
    });
  },
};
