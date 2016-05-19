<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/root" name="oxm-icons-apple">
    <!-- className 'J_OXMod' required  -->
    <div class="J_OXMod oxmod-oxm-icons-apple" ox-mod="oxm-icons-apple">
        <div data-on="1">
            <div class="marquee-win">
                <div class="page-container" style="width:{count(data/icon-menu/i)}00%;">
                <xsl:for-each select="data/icon-menu/i">
                    <div class="icon-page">
                        <xsl:for-each select="i">
                            <a class="icon" target="_blank" href="{href}" >

                                <img style="background-image:url({icon});"
                                     src="//momofox.com/uploads/img/a8876120-17db-11e6-b734-95ffd38867b8.png" />
                                <br/>
                                <xsl:value-of select="title"/>
                            </a>
                        </xsl:for-each>
                    </div>
                </xsl:for-each>
                </div>

            </div>

            <div class="index-dots">
                <xsl:for-each select="data/icon-menu/i">
                    <i class="dot"></i>
                </xsl:for-each>
            </div>
        </div>
    </div>
    </xsl:template>

</xsl:stylesheet>
