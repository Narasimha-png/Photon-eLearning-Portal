var l = [];
var attempted = 0;
var unattempted = 0;
var review = 0;

function updatedetails() {
    document.getElementById("val1").innerHTML = `${attempted}`;
    document.getElementById("val2").innerHTML = `${unattempted}`;
    document.getElementById("val3").innerHTML = `${review}`;
    document.getElementById("val4").innerHTML = `${160 - attempted - unattempted} `;

}

function clearfunc() {
    
    if (map.has(currquestion)) {
        var tanswer = map.get(currquestion);
        if (tanswer == qb[currquestion].Ans)
            score -= 1;
        map.delete(currquestion);
        attempted -= 1;
    }
    clearcheckbox();
}

function markedforreview() {
    if (document.getElementById("flexSwitchCheckChecked").checked) {
        document.getElementById((currquestion + 1).toString()).style.background = "blue";
        review += 1;
    }
    else {
        document.getElementById((currquestion + 1).toString()).style.background = "white";
        review -= 1;
    }
}

var qb = [
   
{Q:"./test2/question (1).jpg",A:"./test2/question (2).jpg",B:"./test2/question (3).jpg",C:"./test2/question (4).jpg",D:"./test2/question (5).jpg",Ans:"A"},
{Q:"./test2/question (6).jpg",A:"./test2/question (7).jpg",B:"./test2/question (8).jpg",C:"./test2/question (9).jpg",D:"./test2/question (10).jpg",Ans:"C"},
{Q:"./test2/question (11).jpg",A:"./test2/question (12).jpg",B:"./test2/question (13).jpg",C:"./test2/question (14).jpg",D:"./test2/question (15).jpg",Ans:"B"},
{Q:"./test2/question (16).jpg",A:"./test2/question (17).jpg",B:"./test2/question (18).jpg",C:"./test2/question (19).jpg",D:"./test2/question (20).jpg",Ans:"D"},
{Q:"./test2/question (21).jpg",A:"./test2/question (22).jpg",B:"./test2/question (23).jpg",C:"./test2/question (24).jpg",D:"./test2/question (25).jpg",Ans:"C"},
{Q:"./test2/question (26).jpg",A:"./test2/question (27).jpg",B:"./test2/question (28).jpg",C:"./test2/question (29).jpg",D:"./test2/question (30).jpg",Ans:"B"},
{Q:"./test2/question (31).jpg",A:"./test2/question (32).jpg",B:"./test2/question (33).jpg",C:"./test2/question (34).jpg",D:"./test2/question (35).jpg",Ans:"A"},
{Q:"./test2/question (36).jpg",A:"./test2/question (37).jpg",B:"./test2/question (38).jpg",C:"./test2/question (39).jpg",D:"./test2/question (40).jpg",Ans:"B"},
{Q:"./test2/question (41).jpg",A:"./test2/question (42).jpg",B:"./test2/question (43).jpg",C:"./test2/question (44).jpg",D:"./test2/question (45).jpg",Ans:"C"},
{Q:"./test2/question (46).jpg",A:"./test2/question (47).jpg",B:"./test2/question (48).jpg",C:"./test2/question (49).jpg",D:"./test2/question (50).jpg",Ans:"B"},
{Q:"./test2/question (51).jpg",A:"./test2/question (52).jpg",B:"./test2/question (53).jpg",C:"./test2/question (54).jpg",D:"./test2/question (55).jpg",Ans:"A"},
{Q:"./test2/question (56).jpg",A:"./test2/question (57).jpg",B:"./test2/question (58).jpg",C:"./test2/question (59).jpg",D:"./test2/question (60).jpg",Ans:"C"},
{Q:"./test2/question (61).jpg",A:"./test2/question (62).jpg",B:"./test2/question (63).jpg",C:"./test2/question (64).jpg",D:"./test2/question (65).jpg",Ans:"B"},
{Q:"./test2/question (66).jpg",A:"./test2/question (67).jpg",B:"./test2/question (68).jpg",C:"./test2/question (69).jpg",D:"./test2/question (70).jpg",Ans:"C"},
{Q:"./test2/question (71).jpg",A:"./test2/question (72).jpg",B:"./test2/question (73).jpg",C:"./test2/question (74).jpg",D:"./test2/question (75).jpg",Ans:"A"},
{Q:"./test2/question (76).jpg",A:"./test2/question (77).jpg",B:"./test2/question (78).jpg",C:"./test2/question (79).jpg",D:"./test2/question (80).jpg",Ans:"A"},
{Q:"./test2/question (81).jpg",A:"./test2/question (82).jpg",B:"./test2/question (83).jpg",C:"./test2/question (84).jpg",D:"./test2/question (85).jpg",Ans:"D"},
{Q:"./test2/question (86).jpg",A:"./test2/question (87).jpg",B:"./test2/question (88).jpg",C:"./test2/question (89).jpg",D:"./test2/question (90).jpg",Ans:"B"},
{Q:"./test2/question (91).jpg",A:"./test2/question (92).jpg",B:"./test2/question (93).jpg",C:"./test2/question (94).jpg",D:"./test2/question (95).jpg",Ans:"D"},
{Q:"./test2/question (96).jpg",A:"./test2/question (97).jpg",B:"./test2/question (98).jpg",C:"./test2/question (99).jpg",D:"./test2/question (100).jpg",Ans:"D"},
{Q:"./test2/question (101).jpg",A:"./test2/question (102).jpg",B:"./test2/question (103).jpg",C:"./test2/question (104).jpg",D:"./test2/question (105).jpg",Ans:"B"},
{Q:"./test2/question (106).jpg",A:"./test2/question (107).jpg",B:"./test2/question (108).jpg",C:"./test2/question (109).jpg",D:"./test2/question (110).jpg",Ans:"D"},
{Q:"./test2/question (111).jpg",A:"./test2/question (112).jpg",B:"./test2/question (113).jpg",C:"./test2/question (114).jpg",D:"./test2/question (115).jpg",Ans:"D"},
{Q:"./test2/question (116).jpg",A:"./test2/question (117).jpg",B:"./test2/question (118).jpg",C:"./test2/question (119).jpg",D:"./test2/question (120).jpg",Ans:"D"},
{Q:"./test2/question (121).jpg",A:"./test2/question (122).jpg",B:"./test2/question (123).jpg",C:"./test2/question (124).jpg",D:"./test2/question (125).jpg",Ans:"C"},
{Q:"./test2/question (126).jpg",A:"./test2/question (127).jpg",B:"./test2/question (128).jpg",C:"./test2/question (129).jpg",D:"./test2/question (130).jpg",Ans:"D"},
{Q:"./test2/question (131).jpg",A:"./test2/question (132).jpg",B:"./test2/question (133).jpg",C:"./test2/question (134).jpg",D:"./test2/question (135).jpg",Ans:"B"},
{Q:"./test2/question (136).jpg",A:"./test2/question (137).jpg",B:"./test2/question (138).jpg",C:"./test2/question (139).jpg",D:"./test2/question (140).jpg",Ans:"D"},
{Q:"./test2/question (141).jpg",A:"./test2/question (142).jpg",B:"./test2/question (143).jpg",C:"./test2/question (144).jpg",D:"./test2/question (145).jpg",Ans:"D"},
{Q:"./test2/question (146).jpg",A:"./test2/question (147).jpg",B:"./test2/question (148).jpg",C:"./test2/question (149).jpg",D:"./test2/question (150).jpg",Ans:"B"},
{Q:"./test2/question (151).jpg",A:"./test2/question (152).jpg",B:"./test2/question (153).jpg",C:"./test2/question (154).jpg",D:"./test2/question (155).jpg",Ans:"A"},
{Q:"./test2/question (156).jpg",A:"./test2/question (157).jpg",B:"./test2/question (158).jpg",C:"./test2/question (159).jpg",D:"./test2/question (160).jpg",Ans:"A"},
{Q:"./test2/question (161).jpg",A:"./test2/question (162).jpg",B:"./test2/question (163).jpg",C:"./test2/question (164).jpg",D:"./test2/question (165).jpg",Ans:"A"},
{Q:"./test2/question (166).jpg",A:"./test2/question (167).jpg",B:"./test2/question (168).jpg",C:"./test2/question (169).jpg",D:"./test2/question (170).jpg",Ans:"B"},
{Q:"./test2/question (171).jpg",A:"./test2/question (172).jpg",B:"./test2/question (173).jpg",C:"./test2/question (174).jpg",D:"./test2/question (175).jpg",Ans:"A"},
{Q:"./test2/question (176).jpg",A:"./test2/question (177).jpg",B:"./test2/question (178).jpg",C:"./test2/question (179).jpg",D:"./test2/question (180).jpg",Ans:"A"},
{Q:"./test2/question (181).jpg",A:"./test2/question (182).jpg",B:"./test2/question (183).jpg",C:"./test2/question (184).jpg",D:"./test2/question (185).jpg",Ans:"A"},
{Q:"./test2/question (186).jpg",A:"./test2/question (187).jpg",B:"./test2/question (188).jpg",C:"./test2/question (189).jpg",D:"./test2/question (190).jpg",Ans:"C"},
{Q:"./test2/question (191).jpg",A:"./test2/question (192).jpg",B:"./test2/question (193).jpg",C:"./test2/question (194).jpg",D:"./test2/question (195).jpg",Ans:"A"},
{Q:"./test2/question (196).jpg",A:"./test2/question (197).jpg",B:"./test2/question (198).jpg",C:"./test2/question (199).jpg",D:"./test2/question (200).jpg",Ans:"D"},
{Q:"./test2/question (201).jpg",A:"./test2/question (202).jpg",B:"./test2/question (203).jpg",C:"./test2/question (204).jpg",D:"./test2/question (205).jpg",Ans:"B"},
{Q:"./test2/question (206).jpg",A:"./test2/question (207).jpg",B:"./test2/question (208).jpg",C:"./test2/question (209).jpg",D:"./test2/question (210).jpg",Ans:"B"},
{Q:"./test2/question (211).jpg",A:"./test2/question (212).jpg",B:"./test2/question (213).jpg",C:"./test2/question (214).jpg",D:"./test2/question (215).jpg",Ans:"C"},
{Q:"./test2/question (216).jpg",A:"./test2/question (217).jpg",B:"./test2/question (218).jpg",C:"./test2/question (219).jpg",D:"./test2/question (220).jpg",Ans:"C"},
{Q:"./test2/question (221).jpg",A:"./test2/question (222).jpg",B:"./test2/question (223).jpg",C:"./test2/question (224).jpg",D:"./test2/question (225).jpg",Ans:"C"},
{Q:"./test2/question (226).jpg",A:"./test2/question (227).jpg",B:"./test2/question (228).jpg",C:"./test2/question (229).jpg",D:"./test2/question (230).jpg",Ans:"B"},
{Q:"./test2/question (231).jpg",A:"./test2/question (232).jpg",B:"./test2/question (233).jpg",C:"./test2/question (234).jpg",D:"./test2/question (235).jpg",Ans:"D"},
{Q:"./test2/question (236).jpg",A:"./test2/question (237).jpg",B:"./test2/question (238).jpg",C:"./test2/question (239).jpg",D:"./test2/question (240).jpg",Ans:"D"},
{Q:"./test2/question (241).jpg",A:"./test2/question (242).jpg",B:"./test2/question (243).jpg",C:"./test2/question (244).jpg",D:"./test2/question (245).jpg",Ans:"B"},
{Q:"./test2/question (246).jpg",A:"./test2/question (247).jpg",B:"./test2/question (248).jpg",C:"./test2/question (249).jpg",D:"./test2/question (250).jpg",Ans:"A"},
{Q:"./test2/question (251).jpg",A:"./test2/question (252).jpg",B:"./test2/question (253).jpg",C:"./test2/question (254).jpg",D:"./test2/question (255).jpg",Ans:"B"},
{Q:"./test2/question (256).jpg",A:"./test2/question (257).jpg",B:"./test2/question (258).jpg",C:"./test2/question (259).jpg",D:"./test2/question (260).jpg",Ans:"A"},
{Q:"./test2/question (261).jpg",A:"./test2/question (262).jpg",B:"./test2/question (263).jpg",C:"./test2/question (264).jpg",D:"./test2/question (265).jpg",Ans:"A"},
{Q:"./test2/question (266).jpg",A:"./test2/question (267).jpg",B:"./test2/question (268).jpg",C:"./test2/question (269).jpg",D:"./test2/question (270).jpg",Ans:"D"},
{Q:"./test2/question (271).jpg",A:"./test2/question (272).jpg",B:"./test2/question (273).jpg",C:"./test2/question (274).jpg",D:"./test2/question (275).jpg",Ans:"C"},
{Q:"./test2/question (276).jpg",A:"./test2/question (277).jpg",B:"./test2/question (278).jpg",C:"./test2/question (279).jpg",D:"./test2/question (280).jpg",Ans:"D"},
{Q:"./test2/question (281).jpg",A:"./test2/question (282).jpg",B:"./test2/question (283).jpg",C:"./test2/question (284).jpg",D:"./test2/question (285).jpg",Ans:"D"},
{Q:"./test2/question (286).jpg",A:"./test2/question (287).jpg",B:"./test2/question (288).jpg",C:"./test2/question (289).jpg",D:"./test2/question (290).jpg",Ans:"B"},
{Q:"./test2/question (291).jpg",A:"./test2/question (292).jpg",B:"./test2/question (293).jpg",C:"./test2/question (294).jpg",D:"./test2/question (295).jpg",Ans:"D"},
{Q:"./test2/question (296).jpg",A:"./test2/question (297).jpg",B:"./test2/question (298).jpg",C:"./test2/question (299).jpg",D:"./test2/question (300).jpg",Ans:"C"},
{Q:"./test2/question (301).jpg",A:"./test2/question (302).jpg",B:"./test2/question (303).jpg",C:"./test2/question (304).jpg",D:"./test2/question (305).jpg",Ans:"C"},
{Q:"./test2/question (306).jpg",A:"./test2/question (307).jpg",B:"./test2/question (308).jpg",C:"./test2/question (309).jpg",D:"./test2/question (310).jpg",Ans:"A"},
{Q:"./test2/question (311).jpg",A:"./test2/question (312).jpg",B:"./test2/question (313).jpg",C:"./test2/question (314).jpg",D:"./test2/question (315).jpg",Ans:"A"},
{Q:"./test2/question (316).jpg",A:"./test2/question (317).jpg",B:"./test2/question (318).jpg",C:"./test2/question (319).jpg",D:"./test2/question (320).jpg",Ans:"D"},
{Q:"./test2/question (321).jpg",A:"./test2/question (322).jpg",B:"./test2/question (323).jpg",C:"./test2/question (324).jpg",D:"./test2/question (325).jpg",Ans:"D"},
{Q:"./test2/question (326).jpg",A:"./test2/question (327).jpg",B:"./test2/question (328).jpg",C:"./test2/question (329).jpg",D:"./test2/question (330).jpg",Ans:"B"},
{Q:"./test2/question (331).jpg",A:"./test2/question (332).jpg",B:"./test2/question (333).jpg",C:"./test2/question (334).jpg",D:"./test2/question (335).jpg",Ans:"D"},
{Q:"./test2/question (336).jpg",A:"./test2/question (337).jpg",B:"./test2/question (338).jpg",C:"./test2/question (339).jpg",D:"./test2/question (340).jpg",Ans:"B"},
{Q:"./test2/question (341).jpg",A:"./test2/question (342).jpg",B:"./test2/question (343).jpg",C:"./test2/question (344).jpg",D:"./test2/question (345).jpg",Ans:"D"},
{Q:"./test2/question (346).jpg",A:"./test2/question (347).jpg",B:"./test2/question (348).jpg",C:"./test2/question (349).jpg",D:"./test2/question (350).jpg",Ans:"A"},
{Q:"./test2/question (351).jpg",A:"./test2/question (352).jpg",B:"./test2/question (353).jpg",C:"./test2/question (354).jpg",D:"./test2/question (355).jpg",Ans:"B"},
{Q:"./test2/question (356).jpg",A:"./test2/question (357).jpg",B:"./test2/question (358).jpg",C:"./test2/question (359).jpg",D:"./test2/question (360).jpg",Ans:"B"},
{Q:"./test2/question (361).jpg",A:"./test2/question (362).jpg",B:"./test2/question (363).jpg",C:"./test2/question (364).jpg",D:"./test2/question (365).jpg",Ans:"A"},
{Q:"./test2/question (366).jpg",A:"./test2/question (367).jpg",B:"./test2/question (368).jpg",C:"./test2/question (369).jpg",D:"./test2/question (370).jpg",Ans:"D"},
{Q:"./test2/question (371).jpg",A:"./test2/question (372).jpg",B:"./test2/question (373).jpg",C:"./test2/question (374).jpg",D:"./test2/question (375).jpg",Ans:"A"},
{Q:"./test2/question (376).jpg",A:"./test2/question (377).jpg",B:"./test2/question (378).jpg",C:"./test2/question (379).jpg",D:"./test2/question (380).jpg",Ans:"C"},
{Q:"./test2/question (381).jpg",A:"./test2/question (382).jpg",B:"./test2/question (383).jpg",C:"./test2/question (384).jpg",D:"./test2/question (385).jpg",Ans:"C"},
{Q:"./test2/question (386).jpg",A:"./test2/question (387).jpg",B:"./test2/question (388).jpg",C:"./test2/question (389).jpg",D:"./test2/question (390).jpg",Ans:"A"},
{Q:"./test2/question (391).jpg",A:"./test2/question (392).jpg",B:"./test2/question (393).jpg",C:"./test2/question (394).jpg",D:"./test2/question (395).jpg",Ans:"B"},
{Q:"./test2/question (396).jpg",A:"./test2/question (397).jpg",B:"./test2/question (398).jpg",C:"./test2/question (399).jpg",D:"./test2/question (400).jpg",Ans:"B"},
{Q:"./test2/question (401).jpg",A:"./test2/question (402).jpg",B:"./test2/question (403).jpg",C:"./test2/question (404).jpg",D:"./test2/question (405).jpg",Ans:"B"},
{Q:"./test2/question (406).jpg",A:"./test2/question (407).jpg",B:"./test2/question (408).jpg",C:"./test2/question (409).jpg",D:"./test2/question (410).jpg",Ans:"B"},
{Q:"./test2/question (411).jpg",A:"./test2/question (412).jpg",B:"./test2/question (413).jpg",C:"./test2/question (414).jpg",D:"./test2/question (415).jpg",Ans:"B"},
{Q:"./test2/question (416).jpg",A:"./test2/question (417).jpg",B:"./test2/question (418).jpg",C:"./test2/question (419).jpg",D:"./test2/question (420).jpg",Ans:"A"},
{Q:"./test2/question (421).jpg",A:"./test2/question (422).jpg",B:"./test2/question (423).jpg",C:"./test2/question (424).jpg",D:"./test2/question (425).jpg",Ans:"B"},
{Q:"./test2/question (426).jpg",A:"./test2/question (427).jpg",B:"./test2/question (428).jpg",C:"./test2/question (429).jpg",D:"./test2/question (430).jpg",Ans:"C"},
{Q:"./test2/question (431).jpg",A:"./test2/question (432).jpg",B:"./test2/question (433).jpg",C:"./test2/question (434).jpg",D:"./test2/question (435).jpg",Ans:"B"},
{Q:"./test2/question (436).jpg",A:"./test2/question (437).jpg",B:"./test2/question (438).jpg",C:"./test2/question (439).jpg",D:"./test2/question (440).jpg",Ans:"A"},
{Q:"./test2/question (441).jpg",A:"./test2/question (442).jpg",B:"./test2/question (443).jpg",C:"./test2/question (444).jpg",D:"./test2/question (445).jpg",Ans:"B"},
{Q:"./test2/question (446).jpg",A:"./test2/question (447).jpg",B:"./test2/question (448).jpg",C:"./test2/question (449).jpg",D:"./test2/question (450).jpg",Ans:"D"},
{Q:"./test2/question (451).jpg",A:"./test2/question (452).jpg",B:"./test2/question (453).jpg",C:"./test2/question (454).jpg",D:"./test2/question (455).jpg",Ans:"D"},
{Q:"./test2/question (456).jpg",A:"./test2/question (457).jpg",B:"./test2/question (458).jpg",C:"./test2/question (459).jpg",D:"./test2/question (460).jpg",Ans:"C"},
{Q:"./test2/question (461).jpg",A:"./test2/question (462).jpg",B:"./test2/question (463).jpg",C:"./test2/question (464).jpg",D:"./test2/question (465).jpg",Ans:"B"},
{Q:"./test2/question (466).jpg",A:"./test2/question (467).jpg",B:"./test2/question (468).jpg",C:"./test2/question (469).jpg",D:"./test2/question (470).jpg",Ans:"C"},
{Q:"./test2/question (471).jpg",A:"./test2/question (472).jpg",B:"./test2/question (473).jpg",C:"./test2/question (474).jpg",D:"./test2/question (475).jpg",Ans:"C"},
{Q:"./test2/question (476).jpg",A:"./test2/question (477).jpg",B:"./test2/question (478).jpg",C:"./test2/question (479).jpg",D:"./test2/question (480).jpg",Ans:"A"},
{Q:"./test2/question (481).jpg",A:"./test2/question (482).jpg",B:"./test2/question (483).jpg",C:"./test2/question (484).jpg",D:"./test2/question (485).jpg",Ans:"D"},
{Q:"./test2/question (486).jpg",A:"./test2/question (487).jpg",B:"./test2/question (488).jpg",C:"./test2/question (489).jpg",D:"./test2/question (490).jpg",Ans:"C"},
{Q:"./test2/question (491).jpg",A:"./test2/question (492).jpg",B:"./test2/question (493).jpg",C:"./test2/question (494).jpg",D:"./test2/question (495).jpg",Ans:"A"},
{Q:"./test2/question (496).jpg",A:"./test2/question (497).jpg",B:"./test2/question (498).jpg",C:"./test2/question (499).jpg",D:"./test2/question (500).jpg",Ans:"A"},
{Q:"./test2/question (501).jpg",A:"./test2/question (502).jpg",B:"./test2/question (503).jpg",C:"./test2/question (504).jpg",D:"./test2/question (505).jpg",Ans:"A"},
{Q:"./test2/question (506).jpg",A:"./test2/question (507).jpg",B:"./test2/question (508).jpg",C:"./test2/question (509).jpg",D:"./test2/question (510).jpg",Ans:"C"},
{Q:"./test2/question (511).jpg",A:"./test2/question (512).jpg",B:"./test2/question (513).jpg",C:"./test2/question (514).jpg",D:"./test2/question (515).jpg",Ans:"C"},
{Q:"./test2/question (516).jpg",A:"./test2/question (517).jpg",B:"./test2/question (518).jpg",C:"./test2/question (519).jpg",D:"./test2/question (520).jpg",Ans:"C"},
{Q:"./test2/question (521).jpg",A:"./test2/question (522).jpg",B:"./test2/question (523).jpg",C:"./test2/question (524).jpg",D:"./test2/question (525).jpg",Ans:"C"},
{Q:"./test2/question (526).jpg",A:"./test2/question (527).jpg",B:"./test2/question (528).jpg",C:"./test2/question (529).jpg",D:"./test2/question (530).jpg",Ans:"C"},
{Q:"./test2/question (531).jpg",A:"./test2/question (532).jpg",B:"./test2/question (533).jpg",C:"./test2/question (534).jpg",D:"./test2/question (535).jpg",Ans:"D"},
{Q:"./test2/question (536).jpg",A:"./test2/question (537).jpg",B:"./test2/question (538).jpg",C:"./test2/question (539).jpg",D:"./test2/question (540).jpg",Ans:"A"},
{Q:"./test2/question (541).jpg",A:"./test2/question (542).jpg",B:"./test2/question (543).jpg",C:"./test2/question (544).jpg",D:"./test2/question (545).jpg",Ans:"C"},
{Q:"./test2/question (546).jpg",A:"./test2/question (547).jpg",B:"./test2/question (548).jpg",C:"./test2/question (549).jpg",D:"./test2/question (550).jpg",Ans:"C"},
{Q:"./test2/question (551).jpg",A:"./test2/question (552).jpg",B:"./test2/question (553).jpg",C:"./test2/question (554).jpg",D:"./test2/question (555).jpg",Ans:"A"},
{Q:"./test2/question (556).jpg",A:"./test2/question (557).jpg",B:"./test2/question (558).jpg",C:"./test2/question (559).jpg",D:"./test2/question (560).jpg",Ans:"B"},
{Q:"./test2/question (561).jpg",A:"./test2/question (562).jpg",B:"./test2/question (563).jpg",C:"./test2/question (564).jpg",D:"./test2/question (565).jpg",Ans:"B"},
{Q:"./test2/question (566).jpg",A:"./test2/question (567).jpg",B:"./test2/question (568).jpg",C:"./test2/question (569).jpg",D:"./test2/question (570).jpg",Ans:"A"},
{Q:"./test2/question (571).jpg",A:"./test2/question (572).jpg",B:"./test2/question (573).jpg",C:"./test2/question (574).jpg",D:"./test2/question (575).jpg",Ans:"D"},
{Q:"./test2/question (576).jpg",A:"./test2/question (577).jpg",B:"./test2/question (578).jpg",C:"./test2/question (579).jpg",D:"./test2/question (580).jpg",Ans:"A"},
{Q:"./test2/question (581).jpg",A:"./test2/question (582).jpg",B:"./test2/question (583).jpg",C:"./test2/question (584).jpg",D:"./test2/question (585).jpg",Ans:"C"},
{Q:"./test2/question (586).jpg",A:"./test2/question (587).jpg",B:"./test2/question (588).jpg",C:"./test2/question (589).jpg",D:"./test2/question (590).jpg",Ans:"C"},
{Q:"./test2/question (591).jpg",A:"./test2/question (592).jpg",B:"./test2/question (593).jpg",C:"./test2/question (594).jpg",D:"./test2/question (595).jpg",Ans:"D"},
{Q:"./test2/question (596).jpg",A:"./test2/question (597).jpg",B:"./test2/question (598).jpg",C:"./test2/question (599).jpg",D:"./test2/question (600).jpg",Ans:"B"},
{Q:"./test2/question (601).jpg",A:"./test2/question (602).jpg",B:"./test2/question (603).jpg",C:"./test2/question (604).jpg",D:"./test2/question (605).jpg",Ans:"B"},
{Q:"./test2/question (606).jpg",A:"./test2/question (607).jpg",B:"./test2/question (608).jpg",C:"./test2/question (609).jpg",D:"./test2/question (610).jpg",Ans:"A"},
{Q:"./test2/question (611).jpg",A:"./test2/question (612).jpg",B:"./test2/question (613).jpg",C:"./test2/question (614).jpg",D:"./test2/question (615).jpg",Ans:"A"},
{Q:"./test2/question (616).jpg",A:"./test2/question (617).jpg",B:"./test2/question (618).jpg",C:"./test2/question (619).jpg",D:"./test2/question (620).jpg",Ans:"A"},
{Q:"./test2/question (621).jpg",A:"./test2/question (622).jpg",B:"./test2/question (623).jpg",C:"./test2/question (624).jpg",D:"./test2/question (625).jpg",Ans:"A"},
{Q:"./test2/question (626).jpg",A:"./test2/question (627).jpg",B:"./test2/question (628).jpg",C:"./test2/question (629).jpg",D:"./test2/question (630).jpg",Ans:"B"},
{Q:"./test2/question (631).jpg",A:"./test2/question (632).jpg",B:"./test2/question (633).jpg",C:"./test2/question (634).jpg",D:"./test2/question (635).jpg",Ans:"C"},
{Q:"./test2/question (636).jpg",A:"./test2/question (637).jpg",B:"./test2/question (638).jpg",C:"./test2/question (639).jpg",D:"./test2/question (640).jpg",Ans:"A"},
{Q:"./test2/question (641).jpg",A:"./test2/question (642).jpg",B:"./test2/question (643).jpg",C:"./test2/question (644).jpg",D:"./test2/question (645).jpg",Ans:"C"},
{Q:"./test2/question (646).jpg",A:"./test2/question (647).jpg",B:"./test2/question (648).jpg",C:"./test2/question (649).jpg",D:"./test2/question (650).jpg",Ans:"B"},
{Q:"./test2/question (651).jpg",A:"./test2/question (652).jpg",B:"./test2/question (653).jpg",C:"./test2/question (654).jpg",D:"./test2/question (655).jpg",Ans:"B"},
{Q:"./test2/question (656).jpg",A:"./test2/question (657).jpg",B:"./test2/question (658).jpg",C:"./test2/question (659).jpg",D:"./test2/question (660).jpg",Ans:"B"},
{Q:"./test2/question (661).jpg",A:"./test2/question (662).jpg",B:"./test2/question (663).jpg",C:"./test2/question (664).jpg",D:"./test2/question (665).jpg",Ans:"A"},
{Q:"./test2/question (666).jpg",A:"./test2/question (667).jpg",B:"./test2/question (668).jpg",C:"./test2/question (669).jpg",D:"./test2/question (670).jpg",Ans:"D"},
{Q:"./test2/question (671).jpg",A:"./test2/question (672).jpg",B:"./test2/question (673).jpg",C:"./test2/question (674).jpg",D:"./test2/question (675).jpg",Ans:"C"},
{Q:"./test2/question (676).jpg",A:"./test2/question (677).jpg",B:"./test2/question (678).jpg",C:"./test2/question (679).jpg",D:"./test2/question (680).jpg",Ans:"A"},
{Q:"./test2/question (681).jpg",A:"./test2/question (682).jpg",B:"./test2/question (683).jpg",C:"./test2/question (684).jpg",D:"./test2/question (685).jpg",Ans:"D"},
{Q:"./test2/question (686).jpg",A:"./test2/question (687).jpg",B:"./test2/question (688).jpg",C:"./test2/question (689).jpg",D:"./test2/question (690).jpg",Ans:"D"},
{Q:"./test2/question (691).jpg",A:"./test2/question (692).jpg",B:"./test2/question (693).jpg",C:"./test2/question (694).jpg",D:"./test2/question (695).jpg",Ans:"A"},
{Q:"./test2/question (696).jpg",A:"./test2/question (697).jpg",B:"./test2/question (698).jpg",C:"./test2/question (699).jpg",D:"./test2/question (700).jpg",Ans:"B"},
{Q:"./test2/question (701).jpg",A:"./test2/question (702).jpg",B:"./test2/question (703).jpg",C:"./test2/question (704).jpg",D:"./test2/question (705).jpg",Ans:"C"},
{Q:"./test2/question (706).jpg",A:"./test2/question (707).jpg",B:"./test2/question (708).jpg",C:"./test2/question (709).jpg",D:"./test2/question (710).jpg",Ans:"A"},
{Q:"./test2/question (711).jpg",A:"./test2/question (712).jpg",B:"./test2/question (713).jpg",C:"./test2/question (714).jpg",D:"./test2/question (715).jpg",Ans:"A"},
{Q:"./test2/question (716).jpg",A:"./test2/question (717).jpg",B:"./test2/question (718).jpg",C:"./test2/question (719).jpg",D:"./test2/question (720).jpg",Ans:"B"},
{Q:"./test2/question (721).jpg",A:"./test2/question (722).jpg",B:"./test2/question (723).jpg",C:"./test2/question (724).jpg",D:"./test2/question (725).jpg",Ans:"A"},
{Q:"./test2/question (726).jpg",A:"./test2/question (727).jpg",B:"./test2/question (728).jpg",C:"./test2/question (729).jpg",D:"./test2/question (730).jpg",Ans:"D"},
{Q:"./test2/question (731).jpg",A:"./test2/question (732).jpg",B:"./test2/question (733).jpg",C:"./test2/question (734).jpg",D:"./test2/question (735).jpg",Ans:"C"},
{Q:"./test2/question (736).jpg",A:"./test2/question (737).jpg",B:"./test2/question (738).jpg",C:"./test2/question (739).jpg",D:"./test2/question (740).jpg",Ans:"D"},
{Q:"./test2/question (741).jpg",A:"./test2/question (742).jpg",B:"./test2/question (743).jpg",C:"./test2/question (744).jpg",D:"./test2/question (745).jpg",Ans:"B"},
{Q:"./test2/question (746).jpg",A:"./test2/question (747).jpg",B:"./test2/question (748).jpg",C:"./test2/question (749).jpg",D:"./test2/question (750).jpg",Ans:"A"},
{Q:"./test2/question (751).jpg",A:"./test2/question (752).jpg",B:"./test2/question (753).jpg",C:"./test2/question (754).jpg",D:"./test2/question (755).jpg",Ans:"B"},
{Q:"./test2/question (756).jpg",A:"./test2/question (757).jpg",B:"./test2/question (758).jpg",C:"./test2/question (759).jpg",D:"./test2/question (760).jpg",Ans:"D"},
{Q:"./test2/question (761).jpg",A:"./test2/question (762).jpg",B:"./test2/question (763).jpg",C:"./test2/question (764).jpg",D:"./test2/question (765).jpg",Ans:"B"},
{Q:"./test2/question (766).jpg",A:"./test2/question (767).jpg",B:"./test2/question (768).jpg",C:"./test2/question (769).jpg",D:"./test2/question (770).jpg",Ans:"C"},
{Q:"./test2/question (771).jpg",A:"./test2/question (772).jpg",B:"./test2/question (773).jpg",C:"./test2/question (774).jpg",D:"./test2/question (775).jpg",Ans:"D"},
{Q:"./test2/question (776).jpg",A:"./test2/question (777).jpg",B:"./test2/question (778).jpg",C:"./test2/question (779).jpg",D:"./test2/question (780).jpg",Ans:"B"},
{Q:"./test2/question (781).jpg",A:"./test2/question (782).jpg",B:"./test2/question (783).jpg",C:"./test2/question (784).jpg",D:"./test2/question (785).jpg",Ans:"B"},
{Q:"./test2/question (786).jpg",A:"./test2/question (787).jpg",B:"./test2/question (788).jpg",C:"./test2/question (789).jpg",D:"./test2/question (790).jpg",Ans:"D"},
{Q:"./test2/question (791).jpg",A:"./test2/question (792).jpg",B:"./test2/question (793).jpg",C:"./test2/question (794).jpg",D:"./test2/question (795).jpg",Ans:"A"},
{Q:"./test2/question (796).jpg",A:"./test2/question (797).jpg",B:"./test2/question (798).jpg",C:"./test2/question (799).jpg",D:"./test2/question (800).jpg",Ans:"C"}
];
var currquestion = 0;
var map = new Map();
var score = 0;

function validate() {
    var marked = document.getElementById("flexSwitchCheckChecked");
  
    const opt = document.getElementsByClassName("form-check-input");
    var flag = true;
    for (var i = 1; i <= 4; i++) {
        if (opt[i].checked) {
            flag = false;
            if (!marked.checked)
                document.getElementById((currquestion + 1).toString()).style.background = "green";
            if (map.has(currquestion)) {
                
                var s = map.get(currquestion);
                if (s == opt[i].value)
                    return;
                else {
                    if (s == qb[currquestion].Ans) {
                        score -= 1;
                        map.set(currquestion, opt[i].value);
                    }
                    if (opt[i].value == qb[currquestion].Ans) {
                        score += 1;
                        map.set(currquestion, opt[i].value);
                    }


                }
            }
            else {
                
                if (l.includes(currquestion)) {
                    l.splice(l.indexOf(currquestion), 1);
                    unattempted -= 1;
                }
                attempted += 1;
                map.set(currquestion, opt[i].value);
                if (opt[i].value == qb[currquestion].Ans) {
                    score++;
                }
            }
        }

    }
    if (flag) {
        if (!l.includes(currquestion)) {
            l.push(currquestion);
            unattempted += 1;
        }
        document.getElementById((currquestion + 1).toString()).style.background = "red";
    }

    return;
}

function clearcheckbox() {
    const opt = document.getElementsByClassName("form-check-input");
    for (var i = 0; i <= 4; i++) {
        if (opt[i].checked)
            opt[i].checked = false;
    }
    document.getElementById("flexSwitchCheckChecked").checked = false;

}

function checkmap() {
    const opt = document.getElementsByClassName("form-check-input");
    if (map.has(currquestion)) {
        var tempans = map.get(currquestion);
        for (var i = 1; i <= 4; i++) {
            if (opt[i].value == tempans) {
                opt[i].checked = true;
                break;
            }
        }
    }
    else
        clearcheckbox();

}

function showans(id) {
    var temp = document.getElementById((currquestion + 1).toString());
    if (temp.style.background != "red" || temp.style.background != "green")
        validate();
    currquestion = Number(id) - 1;
    displayquestion();
    clearcheckbox();
    checkmap();
    updatedetails();

}

function prev() {
    var temp = document.getElementById((currquestion + 1).toString());
    if (temp.style.background != "red" || temp.style.background != "green")
        validate();
    clearcheckbox()
    currquestion -= 1;
    displayquestion(currquestion);
    checkmap();
    updatedetails();

}




function next() {
    var temp = document.getElementById((currquestion + 1).toString());
    if (temp.style.background != "red" || temp.style.background != "green")
        validate();
    currquestion += 1;
    checkmap();
    displayquestion(currquestion);
    updatedetails();



}
function displayquestion(qno) {
    document.getElementById("question").innerHTML = `<p> ${currquestion + 1} </p> <img id="questionimg" src= "${qb[currquestion].Q}" >`;
    document.getElementById("opt1").innerHTML = `<img class="opt" src= "${qb[currquestion].A}" >`;
    document.getElementById("opt2").innerHTML = `<img class="opt" src= "${qb[currquestion].B}" >`;
    document.getElementById("opt3").innerHTML = `<img class="opt" src= "${qb[currquestion].C}" >`;
    document.getElementById("opt4").innerHTML = `<img class="opt" src= "${qb[currquestion].D}" >`;

}

function submit() {

    var min = 179 - Number(document.getElementById("min").innerHTML);
    var sec = 59 - Number(document.getElementById("sec").innerHTML);
    
    var time = "" + min + " : " + sec + "sec";
    
    const jsonString = JSON.stringify(Array.from(map));
    const encodedJson = encodeURIComponent(jsonString);
    location.href = "/pushtestres?attempted=" + attempted + "&unattempted=" + unattempted + "&score=" + score + "&map=" + encodedJson + "&time=" + time;

}



var min = 180;
var sec = 0;
function timer() {
    if (sec == 0) {
        if (min == 0) {
            clearInterval(time);
            submit();
            return;
        }
        document.getElementById("min").innerHTML = `${min - 1}`;
        min -= 1;
        sec = 59;
        document.getElementById("sec").innerHTML = `${sec}`;

    }
    else {
        document.getElementById("sec").innerHTML = `${sec - 1}`;
        sec -= 1;
    }

}
var time = setInterval(timer, 1000);
window.addEventListener('beforeunload', function () {
    localStorage.setItem('myMap', JSON.stringify(Array.from(map.entries())));
    localStorage.setItem("question", currquestion);
    localStorage.setItem("min", min);
    localStorage.setItem("sec", sec);

});


window.addEventListener('load', function () {
    displayquestion(currquestion);

    const mapdata = localStorage.getItem('myMap');
    const questionNumber = Number(localStorage.getItem('question'));
    const minutes = Number(localStorage.getItem('min'));
    const seconds = Number(localStorage.getItem('sec'));
    if (localStorage.getItem("question") !== null) {
        min = minutes;
        sec = seconds;
        const m = JSON.parse(mapdata);
        map = new Map(m);
        displaytime(min, sec);
       
        currquestion = questionNumber;
        localStorage.removeItem("myMap");
        localStorage.removeItem("question");
        localStorage.removeItem("min");
        localStorage.removeItem("sec");
        displayquestion(currquestion);
        checkmap();
    }
    checkmap();
    color();
    updatedetails();
}
);

function displaytime(min, sec) {
    document.getElementById("min").innerHTML = `${min}`;
    document.getElementById("sec").innerHTML = `${sec}`;

}

function color() {
    for (var i = 0; i < 160; i++) {
        if (map.has(i)) {
            document.getElementById((i + 1).toString()).style.background = "green";
            attempted += 1;
            if (map.get(i) == qb[i].Ans)
                score += 1;
        }
        else {
            document.getElementById((i + 1).toString()).style.background = "red";
            l.push(i);
            unattempted += 1;
        }
    }
}