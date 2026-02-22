# CIS*6530 - Submission 2: Malware Payload Collection
## Project 1 - 40 APT Groups
### University of Guelph - CIS*6530 Cyber Threat Intelligence and Adversarial Risk Analysis

---

## ⚠️ WARNING: DO NOT EXECUTE ANY FILES IN THIS REPOSITORY ⚠️

All files contained in this repository are malicious software samples collected
for academic research purposes only. Executing any of these files may cause
serious damage to your system.

---

## Safe Handling Instructions

- DO NOT execute any files under any circumstances
- Only open or analyze files inside an isolated, offline virtual machine
- DO NOT extract files on your host/main computer
- DO NOT connect any VM containing these files to the internet
- Handle all samples as if they are live malware - because they are
- All samples were obtained from public threat intelligence repositories
- Only analyze samples inside an isolated offline Virtual Machine (VM)
- Recommended VM software: VirtualBox or VMware

---

## Repository Structure

```
Submission2_Project1/
├── README.md                  <- This file
├── methodology.md             <- Collection methodology and sources
├── hash_manifest.csv          <- Full traceability: SHA256, APT group, source
│
├── Executable_Malware/        <- PE binaries, DLLs organized by APT group
│   ├── APT28/
│   │   ├── XAgent/
│   │   └── Zebrocy/
│   ├── APT29/
│   │   └── WellMess/
│   └── 
│
└── Other_Payloads/            <- Documents, PDFs, scripts by APT group
    ├── APT28/
    └── 
```

---


## Dataset Overview

- Total Unique Samples: 296
- Executable Malware: ~219 files across 40 APT groups
- Other Payloads: ~77 files across 13 APT groups  
- Primary Source: MalwareBazaar (bazaar.abuse.ch)
- Collection Date: February 2026

---

## APT Groups Covered (Project 1)

| MITRE ID | APT Group         | Country  |
|----------|-------------------|----------|
| G0018    | admin@338         | China    |
| G0006    | APT1              | China    |
| G0005    | APT12             | China    |
| G0023    | APT16             | China    |
| G0025    | APT17             | China    |
| G0073    | APT19             | China    |
| G0022    | APT3              | China    |
| G0013    | APT30             | China    |
| G0096    | APT41             | China    |
| G0001    | Axiom             | China    |
| G0060    | BRONZE BUTLER     | China    |
| G0114    | Chimera           | China    |
| G0009    | Deep Panda        | China    |
| G0066    | Elderwood         | China    |
| G0093    | GALLIUM           | China    |
| G0125    | HAFNIUM           | China    |
| G0004    | Ke3chang          | China    |
| G0045    | menuPass          | China    |
| G0002    | Moafee            | China    |
| G0007    | APT28             | Russia   |
| G0016    | APT29             | Russia   |
| G0074    | Dragonfly 2.0     | Russia   |
| G0053    | FIN5              | Russia   |
| G0034    | Sandworm Team     | Russia   |
| G0088    | TEMP.Veles        | Russia   |
| G0010    | Turla             | Russia   |
| G0080    | Cobalt Group      | Russia   |
| G0035    | Dragonfly         | Russia   |
| G0046    | FIN7              | Russia   |
| G0047    | Gamaredon Group   | Russia   |
| G0108    | Blue Mockingbird  | Unknown  |
| G0097    | Bouncing Golf     | Unknown  |
| G0105    | DarkVishnya       | Unknown  |
| G0120    | Evilnum           | Unknown  |
| G0084    | Gallmaker         | Unknown  |
| G0040    | Patchwork         | India    |
| G0121    | Sidewinder        | India    |
| G0130    | Ajax Security Team| Iran     |
| G0064    | APT33             | Iran     |
| G0087    | APT39             | Iran     |

---

## Hash Manifest

See hash_manifest.csv for full traceability including:
- APT Group and MITRE ID
- Malware Family
- SHA256 hash
- File type
- Source repository
- Folder location

---

