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

var qb=[
    
{Q:"./BiPCTest3/question (1).jpg",A:"./BiPCTest3/question (2).jpg",B:"./BiPCTest3/question (3).jpg",C:"./BiPCTest3/question (4).jpg",D:"./BiPCTest3/question (5).jpg",Ans:"B"},
{Q:"./BiPCTest3/question (6).jpg",A:"./BiPCTest3/question (7).jpg",B:"./BiPCTest3/question (8).jpg",C:"./BiPCTest3/question (9).jpg",D:"./BiPCTest3/question (10).jpg",Ans:"B"},
{Q:"./BiPCTest3/question (11).jpg",A:"./BiPCTest3/question (12).jpg",B:"./BiPCTest3/question (13).jpg",C:"./BiPCTest3/question (14).jpg",D:"./BiPCTest3/question (15).jpg",Ans:"C"},
{Q:"./BiPCTest3/question (16).jpg",A:"./BiPCTest3/question (17).jpg",B:"./BiPCTest3/question (18).jpg",C:"./BiPCTest3/question (19).jpg",D:"./BiPCTest3/question (20).jpg",Ans:"B"},
{Q:"./BiPCTest3/question (21).jpg",A:"./BiPCTest3/question (22).jpg",B:"./BiPCTest3/question (23).jpg",C:"./BiPCTest3/question (24).jpg",D:"./BiPCTest3/question (25).jpg",Ans:"B"},
{Q:"./BiPCTest3/question (26).jpg",A:"./BiPCTest3/question (27).jpg",B:"./BiPCTest3/question (28).jpg",C:"./BiPCTest3/question (29).jpg",D:"./BiPCTest3/question (30).jpg",Ans:"B"},
{Q:"./BiPCTest3/question (31).jpg",A:"./BiPCTest3/question (32).jpg",B:"./BiPCTest3/question (33).jpg",C:"./BiPCTest3/question (34).jpg",D:"./BiPCTest3/question (35).jpg",Ans:"D"},
{Q:"./BiPCTest3/question (36).jpg",A:"./BiPCTest3/question (37).jpg",B:"./BiPCTest3/question (38).jpg",C:"./BiPCTest3/question (39).jpg",D:"./BiPCTest3/question (40).jpg",Ans:"D"},
{Q:"./BiPCTest3/question (41).jpg",A:"./BiPCTest3/question (42).jpg",B:"./BiPCTest3/question (43).jpg",C:"./BiPCTest3/question (44).jpg",D:"./BiPCTest3/question (45).jpg",Ans:"C"},
{Q:"./BiPCTest3/question (46).jpg",A:"./BiPCTest3/question (47).jpg",B:"./BiPCTest3/question (48).jpg",C:"./BiPCTest3/question (49).jpg",D:"./BiPCTest3/question (50).jpg",Ans:"B"},
{Q:"./BiPCTest3/question (51).jpg",A:"./BiPCTest3/question (52).jpg",B:"./BiPCTest3/question (53).jpg",C:"./BiPCTest3/question (54).jpg",D:"./BiPCTest3/question (55).jpg",Ans:"B"},
{Q:"./BiPCTest3/question (56).jpg",A:"./BiPCTest3/question (57).jpg",B:"./BiPCTest3/question (58).jpg",C:"./BiPCTest3/question (59).jpg",D:"./BiPCTest3/question (60).jpg",Ans:"C"},
{Q:"./BiPCTest3/question (61).jpg",A:"./BiPCTest3/question (62).jpg",B:"./BiPCTest3/question (63).jpg",C:"./BiPCTest3/question (64).jpg",D:"./BiPCTest3/question (65).jpg",Ans:"B"},
{Q:"./BiPCTest3/question (66).jpg",A:"./BiPCTest3/question (67).jpg",B:"./BiPCTest3/question (68).jpg",C:"./BiPCTest3/question (69).jpg",D:"./BiPCTest3/question (70).jpg",Ans:"B"},
{Q:"./BiPCTest3/question (71).jpg",A:"./BiPCTest3/question (72).jpg",B:"./BiPCTest3/question (73).jpg",C:"./BiPCTest3/question (74).jpg",D:"./BiPCTest3/question (75).jpg",Ans:"D"},
{Q:"./BiPCTest3/question (76).jpg",A:"./BiPCTest3/question (77).jpg",B:"./BiPCTest3/question (78).jpg",C:"./BiPCTest3/question (79).jpg",D:"./BiPCTest3/question (80).jpg",Ans:"B"},
{Q:"./BiPCTest3/question (81).jpg",A:"./BiPCTest3/question (82).jpg",B:"./BiPCTest3/question (83).jpg",C:"./BiPCTest3/question (84).jpg",D:"./BiPCTest3/question (85).jpg",Ans:"C"},
{Q:"./BiPCTest3/question (86).jpg",A:"./BiPCTest3/question (87).jpg",B:"./BiPCTest3/question (88).jpg",C:"./BiPCTest3/question (89).jpg",D:"./BiPCTest3/question (90).jpg",Ans:"C"},
{Q:"./BiPCTest3/question (91).jpg",A:"./BiPCTest3/question (92).jpg",B:"./BiPCTest3/question (93).jpg",C:"./BiPCTest3/question (94).jpg",D:"./BiPCTest3/question (95).jpg",Ans:"C"},
{Q:"./BiPCTest3/question (96).jpg",A:"./BiPCTest3/question (97).jpg",B:"./BiPCTest3/question (98).jpg",C:"./BiPCTest3/question (99).jpg",D:"./BiPCTest3/question (100).jpg",Ans:"C"},
{Q:"./BiPCTest3/question (101).jpg",A:"./BiPCTest3/question (102).jpg",B:"./BiPCTest3/question (103).jpg",C:"./BiPCTest3/question (104).jpg",D:"./BiPCTest3/question (105).jpg",Ans:"A"},
{Q:"./BiPCTest3/question (106).jpg",A:"./BiPCTest3/question (107).jpg",B:"./BiPCTest3/question (108).jpg",C:"./BiPCTest3/question (109).jpg",D:"./BiPCTest3/question (110).jpg",Ans:"B"},
{Q:"./BiPCTest3/question (111).jpg",A:"./BiPCTest3/question (112).jpg",B:"./BiPCTest3/question (113).jpg",C:"./BiPCTest3/question (114).jpg",D:"./BiPCTest3/question (115).jpg",Ans:"B"},
{Q:"./BiPCTest3/question (116).jpg",A:"./BiPCTest3/question (117).jpg",B:"./BiPCTest3/question (118).jpg",C:"./BiPCTest3/question (119).jpg",D:"./BiPCTest3/question (120).jpg",Ans:"B"},
{Q:"./BiPCTest3/question (121).jpg",A:"./BiPCTest3/question (122).jpg",B:"./BiPCTest3/question (123).jpg",C:"./BiPCTest3/question (124).jpg",D:"./BiPCTest3/question (125).jpg",Ans:"B"},
{Q:"./BiPCTest3/question (126).jpg",A:"./BiPCTest3/question (127).jpg",B:"./BiPCTest3/question (128).jpg",C:"./BiPCTest3/question (129).jpg",D:"./BiPCTest3/question (130).jpg",Ans:"A"},
{Q:"./BiPCTest3/question (131).jpg",A:"./BiPCTest3/question (132).jpg",B:"./BiPCTest3/question (133).jpg",C:"./BiPCTest3/question (134).jpg",D:"./BiPCTest3/question (135).jpg",Ans:"D"},
{Q:"./BiPCTest3/question (136).jpg",A:"./BiPCTest3/question (137).jpg",B:"./BiPCTest3/question (138).jpg",C:"./BiPCTest3/question (139).jpg",D:"./BiPCTest3/question (140).jpg",Ans:"C"},
{Q:"./BiPCTest3/question (141).jpg",A:"./BiPCTest3/question (142).jpg",B:"./BiPCTest3/question (143).jpg",C:"./BiPCTest3/question (144).jpg",D:"./BiPCTest3/question (145).jpg",Ans:"C"},
{Q:"./BiPCTest3/question (146).jpg",A:"./BiPCTest3/question (147).jpg",B:"./BiPCTest3/question (148).jpg",C:"./BiPCTest3/question (149).jpg",D:"./BiPCTest3/question (150).jpg",Ans:"D"},
{Q:"./BiPCTest3/question (151).jpg",A:"./BiPCTest3/question (152).jpg",B:"./BiPCTest3/question (153).jpg",C:"./BiPCTest3/question (154).jpg",D:"./BiPCTest3/question (155).jpg",Ans:"D"},
{Q:"./BiPCTest3/question (156).jpg",A:"./BiPCTest3/question (157).jpg",B:"./BiPCTest3/question (158).jpg",C:"./BiPCTest3/question (159).jpg",D:"./BiPCTest3/question (160).jpg",Ans:"C"},
{Q:"./BiPCTest3/question (161).jpg",A:"./BiPCTest3/question (162).jpg",B:"./BiPCTest3/question (163).jpg",C:"./BiPCTest3/question (164).jpg",D:"./BiPCTest3/question (165).jpg",Ans:"D"},
{Q:"./BiPCTest3/question (166).jpg",A:"./BiPCTest3/question (167).jpg",B:"./BiPCTest3/question (168).jpg",C:"./BiPCTest3/question (169).jpg",D:"./BiPCTest3/question (170).jpg",Ans:"B"},
{Q:"./BiPCTest3/question (171).jpg",A:"./BiPCTest3/question (172).jpg",B:"./BiPCTest3/question (173).jpg",C:"./BiPCTest3/question (174).jpg",D:"./BiPCTest3/question (175).jpg",Ans:"B"},
{Q:"./BiPCTest3/question (176).jpg",A:"./BiPCTest3/question (177).jpg",B:"./BiPCTest3/question (178).jpg",C:"./BiPCTest3/question (179).jpg",D:"./BiPCTest3/question (180).jpg",Ans:"D"},
{Q:"./BiPCTest3/question (181).jpg",A:"./BiPCTest3/question (182).jpg",B:"./BiPCTest3/question (183).jpg",C:"./BiPCTest3/question (184).jpg",D:"./BiPCTest3/question (185).jpg",Ans:"A"},
{Q:"./BiPCTest3/question (186).jpg",A:"./BiPCTest3/question (187).jpg",B:"./BiPCTest3/question (188).jpg",C:"./BiPCTest3/question (189).jpg",D:"./BiPCTest3/question (190).jpg",Ans:"C"},
{Q:"./BiPCTest3/question (191).jpg",A:"./BiPCTest3/question (192).jpg",B:"./BiPCTest3/question (193).jpg",C:"./BiPCTest3/question (194).jpg",D:"./BiPCTest3/question (195).jpg",Ans:"A"},
{Q:"./BiPCTest3/question (196).jpg",A:"./BiPCTest3/question (197).jpg",B:"./BiPCTest3/question (198).jpg",C:"./BiPCTest3/question (199).jpg",D:"./BiPCTest3/question (200).jpg",Ans:"B"},
{Q:"./BiPCTest3/question (201).jpg",A:"./BiPCTest3/question (202).jpg",B:"./BiPCTest3/question (203).jpg",C:"./BiPCTest3/question (204).jpg",D:"./BiPCTest3/question (205).jpg",Ans:"B"},
{Q:"./BiPCTest3/question (206).jpg",A:"./BiPCTest3/question (207).jpg",B:"./BiPCTest3/question (208).jpg",C:"./BiPCTest3/question (209).jpg",D:"./BiPCTest3/question (210).jpg",Ans:"B"},
{Q:"./BiPCTest3/question (211).jpg",A:"./BiPCTest3/question (212).jpg",B:"./BiPCTest3/question (213).jpg",C:"./BiPCTest3/question (214).jpg",D:"./BiPCTest3/question (215).jpg",Ans:"C"},
{Q:"./BiPCTest3/question (216).jpg",A:"./BiPCTest3/question (217).jpg",B:"./BiPCTest3/question (218).jpg",C:"./BiPCTest3/question (219).jpg",D:"./BiPCTest3/question (220).jpg",Ans:"B"},
{Q:"./BiPCTest3/question (221).jpg",A:"./BiPCTest3/question (222).jpg",B:"./BiPCTest3/question (223).jpg",C:"./BiPCTest3/question (224).jpg",D:"./BiPCTest3/question (225).jpg",Ans:"B"},
{Q:"./BiPCTest3/question (226).jpg",A:"./BiPCTest3/question (227).jpg",B:"./BiPCTest3/question (228).jpg",C:"./BiPCTest3/question (229).jpg",D:"./BiPCTest3/question (230).jpg",Ans:"B"},
{Q:"./BiPCTest3/question (231).jpg",A:"./BiPCTest3/question (232).jpg",B:"./BiPCTest3/question (233).jpg",C:"./BiPCTest3/question (234).jpg",D:"./BiPCTest3/question (235).jpg",Ans:"B"},
{Q:"./BiPCTest3/question (236).jpg",A:"./BiPCTest3/question (237).jpg",B:"./BiPCTest3/question (238).jpg",C:"./BiPCTest3/question (239).jpg",D:"./BiPCTest3/question (240).jpg",Ans:"D"},
{Q:"./BiPCTest3/question (241).jpg",A:"./BiPCTest3/question (242).jpg",B:"./BiPCTest3/question (243).jpg",C:"./BiPCTest3/question (244).jpg",D:"./BiPCTest3/question (245).jpg",Ans:"C"},
{Q:"./BiPCTest3/question (246).jpg",A:"./BiPCTest3/question (247).jpg",B:"./BiPCTest3/question (248).jpg",C:"./BiPCTest3/question (249).jpg",D:"./BiPCTest3/question (250).jpg",Ans:"C"},
{Q:"./BiPCTest3/question (251).jpg",A:"./BiPCTest3/question (252).jpg",B:"./BiPCTest3/question (253).jpg",C:"./BiPCTest3/question (254).jpg",D:"./BiPCTest3/question (255).jpg",Ans:"D"},
{Q:"./BiPCTest3/question (256).jpg",A:"./BiPCTest3/question (257).jpg",B:"./BiPCTest3/question (258).jpg",C:"./BiPCTest3/question (259).jpg",D:"./BiPCTest3/question (260).jpg",Ans:"D"},
{Q:"./BiPCTest3/question (261).jpg",A:"./BiPCTest3/question (262).jpg",B:"./BiPCTest3/question (263).jpg",C:"./BiPCTest3/question (264).jpg",D:"./BiPCTest3/question (265).jpg",Ans:"C"},
{Q:"./BiPCTest3/question (266).jpg",A:"./BiPCTest3/question (267).jpg",B:"./BiPCTest3/question (268).jpg",C:"./BiPCTest3/question (269).jpg",D:"./BiPCTest3/question (270).jpg",Ans:"D"},
{Q:"./BiPCTest3/question (271).jpg",A:"./BiPCTest3/question (272).jpg",B:"./BiPCTest3/question (273).jpg",C:"./BiPCTest3/question (274).jpg",D:"./BiPCTest3/question (275).jpg",Ans:"B"},
{Q:"./BiPCTest3/question (276).jpg",A:"./BiPCTest3/question (277).jpg",B:"./BiPCTest3/question (278).jpg",C:"./BiPCTest3/question (279).jpg",D:"./BiPCTest3/question (280).jpg",Ans:"C"},
{Q:"./BiPCTest3/question (281).jpg",A:"./BiPCTest3/question (282).jpg",B:"./BiPCTest3/question (283).jpg",C:"./BiPCTest3/question (284).jpg",D:"./BiPCTest3/question (285).jpg",Ans:"C"},
{Q:"./BiPCTest3/question (286).jpg",A:"./BiPCTest3/question (287).jpg",B:"./BiPCTest3/question (288).jpg",C:"./BiPCTest3/question (289).jpg",D:"./BiPCTest3/question (290).jpg",Ans:"B"},
{Q:"./BiPCTest3/question (291).jpg",A:"./BiPCTest3/question (292).jpg",B:"./BiPCTest3/question (293).jpg",C:"./BiPCTest3/question (294).jpg",D:"./BiPCTest3/question (295).jpg",Ans:"C"},
{Q:"./BiPCTest3/question (296).jpg",A:"./BiPCTest3/question (297).jpg",B:"./BiPCTest3/question (298).jpg",C:"./BiPCTest3/question (299).jpg",D:"./BiPCTest3/question (300).jpg",Ans:"D"},
{Q:"./BiPCTest3/question (301).jpg",A:"./BiPCTest3/question (302).jpg",B:"./BiPCTest3/question (303).jpg",C:"./BiPCTest3/question (304).jpg",D:"./BiPCTest3/question (305).jpg",Ans:"B"},
{Q:"./BiPCTest3/question (306).jpg",A:"./BiPCTest3/question (307).jpg",B:"./BiPCTest3/question (308).jpg",C:"./BiPCTest3/question (309).jpg",D:"./BiPCTest3/question (310).jpg",Ans:"B"},
{Q:"./BiPCTest3/question (311).jpg",A:"./BiPCTest3/question (312).jpg",B:"./BiPCTest3/question (313).jpg",C:"./BiPCTest3/question (314).jpg",D:"./BiPCTest3/question (315).jpg",Ans:"D"},
{Q:"./BiPCTest3/question (316).jpg",A:"./BiPCTest3/question (317).jpg",B:"./BiPCTest3/question (318).jpg",C:"./BiPCTest3/question (319).jpg",D:"./BiPCTest3/question (320).jpg",Ans:"B"},
{Q:"./BiPCTest3/question (321).jpg",A:"./BiPCTest3/question (322).jpg",B:"./BiPCTest3/question (323).jpg",C:"./BiPCTest3/question (324).jpg",D:"./BiPCTest3/question (325).jpg",Ans:"A"},
{Q:"./BiPCTest3/question (326).jpg",A:"./BiPCTest3/question (327).jpg",B:"./BiPCTest3/question (328).jpg",C:"./BiPCTest3/question (329).jpg",D:"./BiPCTest3/question (330).jpg",Ans:"B"},
{Q:"./BiPCTest3/question (331).jpg",A:"./BiPCTest3/question (332).jpg",B:"./BiPCTest3/question (333).jpg",C:"./BiPCTest3/question (334).jpg",D:"./BiPCTest3/question (335).jpg",Ans:"A"},
{Q:"./BiPCTest3/question (336).jpg",A:"./BiPCTest3/question (337).jpg",B:"./BiPCTest3/question (338).jpg",C:"./BiPCTest3/question (339).jpg",D:"./BiPCTest3/question (340).jpg",Ans:"D"},
{Q:"./BiPCTest3/question (341).jpg",A:"./BiPCTest3/question (342).jpg",B:"./BiPCTest3/question (343).jpg",C:"./BiPCTest3/question (344).jpg",D:"./BiPCTest3/question (345).jpg",Ans:"C"},
{Q:"./BiPCTest3/question (346).jpg",A:"./BiPCTest3/question (347).jpg",B:"./BiPCTest3/question (348).jpg",C:"./BiPCTest3/question (349).jpg",D:"./BiPCTest3/question (350).jpg",Ans:"D"},
{Q:"./BiPCTest3/question (351).jpg",A:"./BiPCTest3/question (352).jpg",B:"./BiPCTest3/question (353).jpg",C:"./BiPCTest3/question (354).jpg",D:"./BiPCTest3/question (355).jpg",Ans:"D"},
{Q:"./BiPCTest3/question (356).jpg",A:"./BiPCTest3/question (357).jpg",B:"./BiPCTest3/question (358).jpg",C:"./BiPCTest3/question (359).jpg",D:"./BiPCTest3/question (360).jpg",Ans:"C"},
{Q:"./BiPCTest3/question (361).jpg",A:"./BiPCTest3/question (362).jpg",B:"./BiPCTest3/question (363).jpg",C:"./BiPCTest3/question (364).jpg",D:"./BiPCTest3/question (365).jpg",Ans:"B"},
{Q:"./BiPCTest3/question (366).jpg",A:"./BiPCTest3/question (367).jpg",B:"./BiPCTest3/question (368).jpg",C:"./BiPCTest3/question (369).jpg",D:"./BiPCTest3/question (370).jpg",Ans:"B"},
{Q:"./BiPCTest3/question (371).jpg",A:"./BiPCTest3/question (372).jpg",B:"./BiPCTest3/question (373).jpg",C:"./BiPCTest3/question (374).jpg",D:"./BiPCTest3/question (375).jpg",Ans:"A"},
{Q:"./BiPCTest3/question (376).jpg",A:"./BiPCTest3/question (377).jpg",B:"./BiPCTest3/question (378).jpg",C:"./BiPCTest3/question (379).jpg",D:"./BiPCTest3/question (380).jpg",Ans:"A"},
{Q:"./BiPCTest3/question (381).jpg",A:"./BiPCTest3/question (382).jpg",B:"./BiPCTest3/question (383).jpg",C:"./BiPCTest3/question (384).jpg",D:"./BiPCTest3/question (385).jpg",Ans:"B"},
{Q:"./BiPCTest3/question (386).jpg",A:"./BiPCTest3/question (387).jpg",B:"./BiPCTest3/question (388).jpg",C:"./BiPCTest3/question (389).jpg",D:"./BiPCTest3/question (390).jpg",Ans:"D"},
{Q:"./BiPCTest3/question (391).jpg",A:"./BiPCTest3/question (392).jpg",B:"./BiPCTest3/question (393).jpg",C:"./BiPCTest3/question (394).jpg",D:"./BiPCTest3/question (395).jpg",Ans:"A"},
{Q:"./BiPCTest3/question (396).jpg",A:"./BiPCTest3/question (397).jpg",B:"./BiPCTest3/question (398).jpg",C:"./BiPCTest3/question (399).jpg",D:"./BiPCTest3/question (400).jpg",Ans:"B"},
{Q:"./BiPCTest3/question (401).jpg",A:"./BiPCTest3/question (402).jpg",B:"./BiPCTest3/question (403).jpg",C:"./BiPCTest3/question (404).jpg",D:"./BiPCTest3/question (405).jpg",Ans:"C"},
{Q:"./BiPCTest3/question (406).jpg",A:"./BiPCTest3/question (407).jpg",B:"./BiPCTest3/question (408).jpg",C:"./BiPCTest3/question (409).jpg",D:"./BiPCTest3/question (410).jpg",Ans:"C"},
{Q:"./BiPCTest3/question (411).jpg",A:"./BiPCTest3/question (412).jpg",B:"./BiPCTest3/question (413).jpg",C:"./BiPCTest3/question (414).jpg",D:"./BiPCTest3/question (415).jpg",Ans:"D"},
{Q:"./BiPCTest3/question (416).jpg",A:"./BiPCTest3/question (417).jpg",B:"./BiPCTest3/question (418).jpg",C:"./BiPCTest3/question (419).jpg",D:"./BiPCTest3/question (420).jpg",Ans:"A"},
{Q:"./BiPCTest3/question (421).jpg",A:"./BiPCTest3/question (422).jpg",B:"./BiPCTest3/question (423).jpg",C:"./BiPCTest3/question (424).jpg",D:"./BiPCTest3/question (425).jpg",Ans:"B"},
{Q:"./BiPCTest3/question (426).jpg",A:"./BiPCTest3/question (427).jpg",B:"./BiPCTest3/question (428).jpg",C:"./BiPCTest3/question (429).jpg",D:"./BiPCTest3/question (430).jpg",Ans:"B"},
{Q:"./BiPCTest3/question (431).jpg",A:"./BiPCTest3/question (432).jpg",B:"./BiPCTest3/question (433).jpg",C:"./BiPCTest3/question (434).jpg",D:"./BiPCTest3/question (435).jpg",Ans:"D"},
{Q:"./BiPCTest3/question (436).jpg",A:"./BiPCTest3/question (437).jpg",B:"./BiPCTest3/question (438).jpg",C:"./BiPCTest3/question (439).jpg",D:"./BiPCTest3/question (440).jpg",Ans:"C"},
{Q:"./BiPCTest3/question (441).jpg",A:"./BiPCTest3/question (442).jpg",B:"./BiPCTest3/question (443).jpg",C:"./BiPCTest3/question (444).jpg",D:"./BiPCTest3/question (445).jpg",Ans:"C"},
{Q:"./BiPCTest3/question (446).jpg",A:"./BiPCTest3/question (447).jpg",B:"./BiPCTest3/question (448).jpg",C:"./BiPCTest3/question (449).jpg",D:"./BiPCTest3/question (450).jpg",Ans:"A"},
{Q:"./BiPCTest3/question (451).jpg",A:"./BiPCTest3/question (452).jpg",B:"./BiPCTest3/question (453).jpg",C:"./BiPCTest3/question (454).jpg",D:"./BiPCTest3/question (455).jpg",Ans:"D"},
{Q:"./BiPCTest3/question (456).jpg",A:"./BiPCTest3/question (457).jpg",B:"./BiPCTest3/question (458).jpg",C:"./BiPCTest3/question (459).jpg",D:"./BiPCTest3/question (460).jpg",Ans:"B"},
{Q:"./BiPCTest3/question (461).jpg",A:"./BiPCTest3/question (462).jpg",B:"./BiPCTest3/question (463).jpg",C:"./BiPCTest3/question (464).jpg",D:"./BiPCTest3/question (465).jpg",Ans:"A"},
{Q:"./BiPCTest3/question (466).jpg",A:"./BiPCTest3/question (467).jpg",B:"./BiPCTest3/question (468).jpg",C:"./BiPCTest3/question (469).jpg",D:"./BiPCTest3/question (470).jpg",Ans:"A"},
{Q:"./BiPCTest3/question (471).jpg",A:"./BiPCTest3/question (472).jpg",B:"./BiPCTest3/question (473).jpg",C:"./BiPCTest3/question (474).jpg",D:"./BiPCTest3/question (475).jpg",Ans:"C"},
{Q:"./BiPCTest3/question (476).jpg",A:"./BiPCTest3/question (477).jpg",B:"./BiPCTest3/question (478).jpg",C:"./BiPCTest3/question (479).jpg",D:"./BiPCTest3/question (480).jpg",Ans:"A"},
{Q:"./BiPCTest3/question (481).jpg",A:"./BiPCTest3/question (482).jpg",B:"./BiPCTest3/question (483).jpg",C:"./BiPCTest3/question (484).jpg",D:"./BiPCTest3/question (485).jpg",Ans:"B"},
{Q:"./BiPCTest3/question (486).jpg",A:"./BiPCTest3/question (487).jpg",B:"./BiPCTest3/question (488).jpg",C:"./BiPCTest3/question (489).jpg",D:"./BiPCTest3/question (490).jpg",Ans:"B"},
{Q:"./BiPCTest3/question (491).jpg",A:"./BiPCTest3/question (492).jpg",B:"./BiPCTest3/question (493).jpg",C:"./BiPCTest3/question (494).jpg",D:"./BiPCTest3/question (495).jpg",Ans:"C"},
{Q:"./BiPCTest3/question (496).jpg",A:"./BiPCTest3/question (497).jpg",B:"./BiPCTest3/question (498).jpg",C:"./BiPCTest3/question (499).jpg",D:"./BiPCTest3/question (500).jpg",Ans:"B"},
{Q:"./BiPCTest3/question (501).jpg",A:"./BiPCTest3/question (502).jpg",B:"./BiPCTest3/question (503).jpg",C:"./BiPCTest3/question (504).jpg",D:"./BiPCTest3/question (505).jpg",Ans:"C"},
{Q:"./BiPCTest3/question (506).jpg",A:"./BiPCTest3/question (507).jpg",B:"./BiPCTest3/question (508).jpg",C:"./BiPCTest3/question (509).jpg",D:"./BiPCTest3/question (510).jpg",Ans:"B"},
{Q:"./BiPCTest3/question (511).jpg",A:"./BiPCTest3/question (512).jpg",B:"./BiPCTest3/question (513).jpg",C:"./BiPCTest3/question (514).jpg",D:"./BiPCTest3/question (515).jpg",Ans:"C"},
{Q:"./BiPCTest3/question (516).jpg",A:"./BiPCTest3/question (517).jpg",B:"./BiPCTest3/question (518).jpg",C:"./BiPCTest3/question (519).jpg",D:"./BiPCTest3/question (520).jpg",Ans:"A"},
{Q:"./BiPCTest3/question (521).jpg",A:"./BiPCTest3/question (522).jpg",B:"./BiPCTest3/question (523).jpg",C:"./BiPCTest3/question (524).jpg",D:"./BiPCTest3/question (525).jpg",Ans:"B"},
{Q:"./BiPCTest3/question (526).jpg",A:"./BiPCTest3/question (527).jpg",B:"./BiPCTest3/question (528).jpg",C:"./BiPCTest3/question (529).jpg",D:"./BiPCTest3/question (530).jpg",Ans:"D"},
{Q:"./BiPCTest3/question (531).jpg",A:"./BiPCTest3/question (532).jpg",B:"./BiPCTest3/question (533).jpg",C:"./BiPCTest3/question (534).jpg",D:"./BiPCTest3/question (535).jpg",Ans:"B"},
{Q:"./BiPCTest3/question (536).jpg",A:"./BiPCTest3/question (537).jpg",B:"./BiPCTest3/question (538).jpg",C:"./BiPCTest3/question (539).jpg",D:"./BiPCTest3/question (540).jpg",Ans:"C"},
{Q:"./BiPCTest3/question (541).jpg",A:"./BiPCTest3/question (542).jpg",B:"./BiPCTest3/question (543).jpg",C:"./BiPCTest3/question (544).jpg",D:"./BiPCTest3/question (545).jpg",Ans:"C"},
{Q:"./BiPCTest3/question (546).jpg",A:"./BiPCTest3/question (547).jpg",B:"./BiPCTest3/question (548).jpg",C:"./BiPCTest3/question (549).jpg",D:"./BiPCTest3/question (550).jpg",Ans:"C"},
{Q:"./BiPCTest3/question (551).jpg",A:"./BiPCTest3/question (552).jpg",B:"./BiPCTest3/question (553).jpg",C:"./BiPCTest3/question (554).jpg",D:"./BiPCTest3/question (555).jpg",Ans:"A"},
{Q:"./BiPCTest3/question (556).jpg",A:"./BiPCTest3/question (557).jpg",B:"./BiPCTest3/question (558).jpg",C:"./BiPCTest3/question (559).jpg",D:"./BiPCTest3/question (560).jpg",Ans:"A"},
{Q:"./BiPCTest3/question (561).jpg",A:"./BiPCTest3/question (562).jpg",B:"./BiPCTest3/question (563).jpg",C:"./BiPCTest3/question (564).jpg",D:"./BiPCTest3/question (565).jpg",Ans:"A"},
{Q:"./BiPCTest3/question (566).jpg",A:"./BiPCTest3/question (567).jpg",B:"./BiPCTest3/question (568).jpg",C:"./BiPCTest3/question (569).jpg",D:"./BiPCTest3/question (570).jpg",Ans:"A"},
{Q:"./BiPCTest3/question (571).jpg",A:"./BiPCTest3/question (572).jpg",B:"./BiPCTest3/question (573).jpg",C:"./BiPCTest3/question (574).jpg",D:"./BiPCTest3/question (575).jpg",Ans:"C"},
{Q:"./BiPCTest3/question (576).jpg",A:"./BiPCTest3/question (577).jpg",B:"./BiPCTest3/question (578).jpg",C:"./BiPCTest3/question (579).jpg",D:"./BiPCTest3/question (580).jpg",Ans:"D"},
{Q:"./BiPCTest3/question (581).jpg",A:"./BiPCTest3/question (582).jpg",B:"./BiPCTest3/question (583).jpg",C:"./BiPCTest3/question (584).jpg",D:"./BiPCTest3/question (585).jpg",Ans:"C"},
{Q:"./BiPCTest3/question (586).jpg",A:"./BiPCTest3/question (587).jpg",B:"./BiPCTest3/question (588).jpg",C:"./BiPCTest3/question (589).jpg",D:"./BiPCTest3/question (590).jpg",Ans:"B"},
{Q:"./BiPCTest3/question (591).jpg",A:"./BiPCTest3/question (592).jpg",B:"./BiPCTest3/question (593).jpg",C:"./BiPCTest3/question (594).jpg",D:"./BiPCTest3/question (595).jpg",Ans:"B"},
{Q:"./BiPCTest3/question (596).jpg",A:"./BiPCTest3/question (597).jpg",B:"./BiPCTest3/question (598).jpg",C:"./BiPCTest3/question (599).jpg",D:"./BiPCTest3/question (600).jpg",Ans:"A"},
{Q:"./BiPCTest3/question (601).jpg",A:"./BiPCTest3/question (602).jpg",B:"./BiPCTest3/question (603).jpg",C:"./BiPCTest3/question (604).jpg",D:"./BiPCTest3/question (605).jpg",Ans:"B"},
{Q:"./BiPCTest3/question (606).jpg",A:"./BiPCTest3/question (607).jpg",B:"./BiPCTest3/question (608).jpg",C:"./BiPCTest3/question (609).jpg",D:"./BiPCTest3/question (610).jpg",Ans:"C"},
{Q:"./BiPCTest3/question (611).jpg",A:"./BiPCTest3/question (612).jpg",B:"./BiPCTest3/question (613).jpg",C:"./BiPCTest3/question (614).jpg",D:"./BiPCTest3/question (615).jpg",Ans:"B"},
{Q:"./BiPCTest3/question (616).jpg",A:"./BiPCTest3/question (617).jpg",B:"./BiPCTest3/question (618).jpg",C:"./BiPCTest3/question (619).jpg",D:"./BiPCTest3/question (620).jpg",Ans:"C"},
{Q:"./BiPCTest3/question (621).jpg",A:"./BiPCTest3/question (622).jpg",B:"./BiPCTest3/question (623).jpg",C:"./BiPCTest3/question (624).jpg",D:"./BiPCTest3/question (625).jpg",Ans:"D"},
{Q:"./BiPCTest3/question (626).jpg",A:"./BiPCTest3/question (627).jpg",B:"./BiPCTest3/question (628).jpg",C:"./BiPCTest3/question (629).jpg",D:"./BiPCTest3/question (630).jpg",Ans:"A"},
{Q:"./BiPCTest3/question (631).jpg",A:"./BiPCTest3/question (632).jpg",B:"./BiPCTest3/question (633).jpg",C:"./BiPCTest3/question (634).jpg",D:"./BiPCTest3/question (635).jpg",Ans:"D"},
{Q:"./BiPCTest3/question (636).jpg",A:"./BiPCTest3/question (637).jpg",B:"./BiPCTest3/question (638).jpg",C:"./BiPCTest3/question (639).jpg",D:"./BiPCTest3/question (640).jpg",Ans:"B"},
{Q:"./BiPCTest3/question (641).jpg",A:"./BiPCTest3/question (642).jpg",B:"./BiPCTest3/question (643).jpg",C:"./BiPCTest3/question (644).jpg",D:"./BiPCTest3/question (645).jpg",Ans:"B"},
{Q:"./BiPCTest3/question (646).jpg",A:"./BiPCTest3/question (647).jpg",B:"./BiPCTest3/question (648).jpg",C:"./BiPCTest3/question (649).jpg",D:"./BiPCTest3/question (650).jpg",Ans:"C"},
{Q:"./BiPCTest3/question (651).jpg",A:"./BiPCTest3/question (652).jpg",B:"./BiPCTest3/question (653).jpg",C:"./BiPCTest3/question (654).jpg",D:"./BiPCTest3/question (655).jpg",Ans:"C"},
{Q:"./BiPCTest3/question (656).jpg",A:"./BiPCTest3/question (657).jpg",B:"./BiPCTest3/question (658).jpg",C:"./BiPCTest3/question (659).jpg",D:"./BiPCTest3/question (660).jpg",Ans:"B"},
{Q:"./BiPCTest3/question (661).jpg",A:"./BiPCTest3/question (662).jpg",B:"./BiPCTest3/question (663).jpg",C:"./BiPCTest3/question (664).jpg",D:"./BiPCTest3/question (665).jpg",Ans:"A"},
{Q:"./BiPCTest3/question (666).jpg",A:"./BiPCTest3/question (667).jpg",B:"./BiPCTest3/question (668).jpg",C:"./BiPCTest3/question (669).jpg",D:"./BiPCTest3/question (670).jpg",Ans:"D"},
{Q:"./BiPCTest3/question (671).jpg",A:"./BiPCTest3/question (672).jpg",B:"./BiPCTest3/question (673).jpg",C:"./BiPCTest3/question (674).jpg",D:"./BiPCTest3/question (675).jpg",Ans:"A"},
{Q:"./BiPCTest3/question (676).jpg",A:"./BiPCTest3/question (677).jpg",B:"./BiPCTest3/question (678).jpg",C:"./BiPCTest3/question (679).jpg",D:"./BiPCTest3/question (680).jpg",Ans:"B"},
{Q:"./BiPCTest3/question (681).jpg",A:"./BiPCTest3/question (682).jpg",B:"./BiPCTest3/question (683).jpg",C:"./BiPCTest3/question (684).jpg",D:"./BiPCTest3/question (685).jpg",Ans:"A"},
{Q:"./BiPCTest3/question (686).jpg",A:"./BiPCTest3/question (687).jpg",B:"./BiPCTest3/question (688).jpg",C:"./BiPCTest3/question (689).jpg",D:"./BiPCTest3/question (690).jpg",Ans:"C"},
{Q:"./BiPCTest3/question (691).jpg",A:"./BiPCTest3/question (692).jpg",B:"./BiPCTest3/question (693).jpg",C:"./BiPCTest3/question (694).jpg",D:"./BiPCTest3/question (695).jpg",Ans:"C"},
{Q:"./BiPCTest3/question (696).jpg",A:"./BiPCTest3/question (697).jpg",B:"./BiPCTest3/question (698).jpg",C:"./BiPCTest3/question (699).jpg",D:"./BiPCTest3/question (700).jpg",Ans:"D"},
{Q:"./BiPCTest3/question (701).jpg",A:"./BiPCTest3/question (702).jpg",B:"./BiPCTest3/question (703).jpg",C:"./BiPCTest3/question (704).jpg",D:"./BiPCTest3/question (705).jpg",Ans:"A"},
{Q:"./BiPCTest3/question (706).jpg",A:"./BiPCTest3/question (707).jpg",B:"./BiPCTest3/question (708).jpg",C:"./BiPCTest3/question (709).jpg",D:"./BiPCTest3/question (710).jpg",Ans:"C"},
{Q:"./BiPCTest3/question (711).jpg",A:"./BiPCTest3/question (712).jpg",B:"./BiPCTest3/question (713).jpg",C:"./BiPCTest3/question (714).jpg",D:"./BiPCTest3/question (715).jpg",Ans:"B"},
{Q:"./BiPCTest3/question (716).jpg",A:"./BiPCTest3/question (717).jpg",B:"./BiPCTest3/question (718).jpg",C:"./BiPCTest3/question (719).jpg",D:"./BiPCTest3/question (720).jpg",Ans:"A"},
{Q:"./BiPCTest3/question (721).jpg",A:"./BiPCTest3/question (722).jpg",B:"./BiPCTest3/question (723).jpg",C:"./BiPCTest3/question (724).jpg",D:"./BiPCTest3/question (725).jpg",Ans:"A"},
{Q:"./BiPCTest3/question (726).jpg",A:"./BiPCTest3/question (727).jpg",B:"./BiPCTest3/question (728).jpg",C:"./BiPCTest3/question (729).jpg",D:"./BiPCTest3/question (730).jpg",Ans:"B"},
{Q:"./BiPCTest3/question (731).jpg",A:"./BiPCTest3/question (732).jpg",B:"./BiPCTest3/question (733).jpg",C:"./BiPCTest3/question (734).jpg",D:"./BiPCTest3/question (735).jpg",Ans:"B"},
{Q:"./BiPCTest3/question (736).jpg",A:"./BiPCTest3/question (737).jpg",B:"./BiPCTest3/question (738).jpg",C:"./BiPCTest3/question (739).jpg",D:"./BiPCTest3/question (740).jpg",Ans:"B"},
{Q:"./BiPCTest3/question (741).jpg",A:"./BiPCTest3/question (742).jpg",B:"./BiPCTest3/question (743).jpg",C:"./BiPCTest3/question (744).jpg",D:"./BiPCTest3/question (745).jpg",Ans:"A"},
{Q:"./BiPCTest3/question (746).jpg",A:"./BiPCTest3/question (747).jpg",B:"./BiPCTest3/question (748).jpg",C:"./BiPCTest3/question (749).jpg",D:"./BiPCTest3/question (750).jpg",Ans:"A"},
{Q:"./BiPCTest3/question (751).jpg",A:"./BiPCTest3/question (752).jpg",B:"./BiPCTest3/question (753).jpg",C:"./BiPCTest3/question (754).jpg",D:"./BiPCTest3/question (755).jpg",Ans:"A"},
{Q:"./BiPCTest3/question (756).jpg",A:"./BiPCTest3/question (757).jpg",B:"./BiPCTest3/question (758).jpg",C:"./BiPCTest3/question (759).jpg",D:"./BiPCTest3/question (760).jpg",Ans:"A"},
{Q:"./BiPCTest3/question (761).jpg",A:"./BiPCTest3/question (762).jpg",B:"./BiPCTest3/question (763).jpg",C:"./BiPCTest3/question (764).jpg",D:"./BiPCTest3/question (765).jpg",Ans:"D"},
{Q:"./BiPCTest3/question (766).jpg",A:"./BiPCTest3/question (767).jpg",B:"./BiPCTest3/question (768).jpg",C:"./BiPCTest3/question (769).jpg",D:"./BiPCTest3/question (770).jpg",Ans:"D"},
{Q:"./BiPCTest3/question (771).jpg",A:"./BiPCTest3/question (772).jpg",B:"./BiPCTest3/question (773).jpg",C:"./BiPCTest3/question (774).jpg",D:"./BiPCTest3/question (775).jpg",Ans:"B"},
{Q:"./BiPCTest3/question (776).jpg",A:"./BiPCTest3/question (777).jpg",B:"./BiPCTest3/question (778).jpg",C:"./BiPCTest3/question (779).jpg",D:"./BiPCTest3/question (780).jpg",Ans:"A"},
{Q:"./BiPCTest3/question (781).jpg",A:"./BiPCTest3/question (782).jpg",B:"./BiPCTest3/question (783).jpg",C:"./BiPCTest3/question (784).jpg",D:"./BiPCTest3/question (785).jpg",Ans:"B"},
{Q:"./BiPCTest3/question (786).jpg",A:"./BiPCTest3/question (787).jpg",B:"./BiPCTest3/question (788).jpg",C:"./BiPCTest3/question (789).jpg",D:"./BiPCTest3/question (790).jpg",Ans:"C"},
{Q:"./BiPCTest3/question (791).jpg",A:"./BiPCTest3/question (792).jpg",B:"./BiPCTest3/question (793).jpg",C:"./BiPCTest3/question (794).jpg",D:"./BiPCTest3/question (795).jpg",Ans:"A"},
{Q:"./BiPCTest3/question (796).jpg",A:"./BiPCTest3/question (797).jpg",B:"./BiPCTest3/question (798).jpg",C:"./BiPCTest3/question (799).jpg",D:"./BiPCTest3/question (800).jpg",Ans:"B"}

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