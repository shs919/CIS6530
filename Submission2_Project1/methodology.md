# Collection Methodology - CIS*6530 Submission 2
## Project 1 - Malware Payload Collection
### University of Guelph - February 2026

---

## 1. Overview

This document describes the methodology used to collect malicious payloads
associated with the 40 APT groups assigned in Project 1 of CIS*6530. The
collection was conducted using publicly available threat intelligence repositories
following ethical and responsible research practices.

---

## 2. Sources Used

### Primary Source
- **MalwareBazaar** (bazaar.abuse.ch)
  - Free public malware repository maintained by abuse.ch
  - Samples are community-contributed and tagged by malware family
  - Used for the majority of executable and non-executable samples

### Secondary Source
- **Hybrid Analysis** (hybridanalysis.com)
  - Free public sandbox with downloadable samples
  - Used to verify attribution and supplement collection where needed

### Reference Source
- **MITRE ATT&CK** (attack.mitre.org)
  - Used to identify known malware families associated with each APT group
  - Provided ground truth for family-to-group attribution mapping

---

## 3. Search Strategy

Samples were identified by searching known malware family names associated
with each APT group rather than searching by APT group name directly.
This approach was used because:

- MalwareBazaar indexes samples by malware family tag, not by threat actor
- Family names return more reliable and traceable results
- MITRE ATT&CK documents the specific tools used by each group

### Family-to-Group Mapping

The following malware families were used as search terms and attributed
to the corresponding APT groups based on MITRE ATT&CK documentation:

| Malware Family  | APT Groups Attributed To                                                              |
|-----------------|---------------------------------------------------------------------------------------|
| PlugX           | APT3, APT16, APT17, Axiom, Elderwood, GALLIUM, Ke3chang, menuPass, Moafee, BRONZE BUTLER |
| Gh0stRAT        | APT1, APT12, admin@338, Axiom, GALLIUM, Moafee                                       |
| PoisonIvy       | APT1, APT12, APT30, Deep Panda                                                        |
| CobaltStrike    | APT19, Chimera, Cobalt Group, Dragonfly 2.0, Gallmaker                               |
| njRAT           | APT33, APT39, Ajax Security Team, Bouncing Golf, Sidewinder                          |
| QuasarRAT       | menuPass, Patchwork, Sidewinder                                                       |
| Zebrocy         | APT28                                                                                 |
| XAgent          | APT28                                                                                 |
| WellMess        | APT29                                                                                 |
| MiniDuke        | APT29                                                                                 |
| ShadowPad       | APT41                                                                                 |
| Winnti          | APT41                                                                                 |
| Carbanak        | FIN7, Cobalt Group                                                                    |
| BlackEnergy     | Sandworm Team                                                                         |
| Industroyer     | Sandworm Team                                                                         |
| Pterodo         | Gamaredon Group                                                                       |
| Snake           | Turla                                                                                 |
| Carbon          | Turla                                                                                 |
| Havex           | Dragonfly, Dragonfly 2.0                                                              |
| ChinaChopper    | HAFNIUM                                                                               |
| XMRig           | Blue Mockingbird                                                                      |
| Evilnum         | Evilnum                                                                               |
| RawPOS          | FIN5                                                                                  |
| Triton          | TEMP.Veles                                                                            |
| GolfSpy         | Bouncing Golf                                                                         |

---

## 4. Shared Tooling Note

Several APT groups, particularly Chinese state-sponsored actors, are documented
to share tooling and infrastructure. Groups including APT3, APT16, APT17,
Ke3chang, menuPass, and Moafee all used PlugX as a common tool. Similarly,
Gh0stRAT was shared across multiple Chinese APT groups.

Where identical binaries are attributed to multiple groups, this reflects
documented shared infrastructure and tool-sharing practices in the threat
intelligence literature, not a collection error. Each group's use of the
shared tool is independently documented in MITRE ATT&CK.

---

## 5. Inclusion Criteria

Samples were included in the collection if they met ALL of the following:

- Publicly available on a reputable threat intelligence repository
- Tagged or attributed to a malware family used by a Project 1 APT group
- Attribution supported by MITRE ATT&CK documentation
- File is either an executable (PE32, DLL, ELF) or a malicious document

---

## 6. Exclusion Criteria

Samples were excluded if any of the following applied:

- No clear APT attribution available
- Source was unverified or unreliable
- Sample could not be traced to a specific malware family
- Duplicate hash already present in collection

---

## 7. Collection Process

1. Identified malware family names for each APT group using MITRE ATT&CK
2. Searched MalwareBazaar using each family name as search term
3. Downloaded 5-10 samples per family where available
4. Extracted samples from password-protected zips (password: infected)
5. Organized samples into APT group folders with malware family subfolders
6. Named each file using convention: APTGroup_FamilyName_SHA256prefix.ext
7. Recorded all samples in hash_manifest.csv for traceability

---

## 8. Limitations

- Some APT groups have limited or no publicly available samples
  (e.g. DarkVishnya, Gallmaker, TEMP.Veles, FIN5, Bouncing Golf)
- MalwareBazaar does not always tag samples by threat actor,
  requiring indirect search by malware family name
- Shared tooling across groups means some hashes appear in
  multiple group folders - this is documented and intentional
- Collection reflects publicly available samples only - classified
  or restricted threat intelligence was not used

---

## 9. Ethical Statement

All samples were obtained exclusively from publicly accessible threat
intelligence repositories intended for security research purposes.
No samples were obtained through unauthorized access, purchase from
criminal markets, or any other unethical means. All samples are handled
in accordance with responsible disclosure and research ethics principles.

## Final Dataset Summary

- Total unique samples collected: 296
- Executable Malware samples: approximately 219
- Other Payload samples: approximately 77
- Collection date: February 2026
- Duplicate files were identified and removed using SHA256 hash 
  comparison to ensure dataset integrity
- All files renamed to convention: APTGroup_FamilyName_SHA256prefix.ext

## Groups With No Public Samples Available

The following APT groups had limited or no publicly available samples 
on MalwareBazaar at the time of collection despite exhaustive searching:

- DarkVishnya (G0105) - No samples found. Group is primarily known 
  for physical intrusion attacks using implanted devices rather than 
  traditional malware.

- FIN5 (G0053) - No samples found. RawPOS malware associated with 
  this group had no publicly available samples at time of collection.

- HAFNIUM (G0125) - No samples found. ChinaChopper webshell samples 
  were not available on public repositories at time of collection.

- TEMP.Veles (G0088) - No samples found. Triton/TRISIS ICS malware 
  is highly restricted and not publicly available on open repositories 
  due to its critical infrastructure targeting nature.

All searches were conducted in good faith using known malware family 
names documented in MITRE ATT&CK for each group.
