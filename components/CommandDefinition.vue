<template>
  <div>
    <h5>
      <v-tooltip top>
        <span :class="`${color}--text`" slot="activator">
          <v-icon>{{icon}}</v-icon>
          {{prefix}}{{commandName}} 
        </span>
        <span>{{iconTooltip}}</span>
      </v-tooltip>
      <span v-if="commandMeta.args" v-for="(arg, i) in args">
        <span v-if="i >= 1">{{argSeparator}}</span>
        <v-tooltip bottom>
          <span :class="{ 'grey--text': arg.optional }" slot="activator">
            {{arg.display}}
            <span v-if="arg.ellipsis" class="grey--text"> . . . </span>
          </span>
          <span>{{arg.tooltip}}</span>
        </v-tooltip>
      </span>
    </h5>
    <p v-if="commandMeta.aliases" class="subheading grey--text">
      Aliases: 
      <code v-for="alias in commandMeta.aliases" style="margin-right: 8px">{{prefix}}{{alias}}</code>
    </p>
    <p v-if="commandMeta.description" v-html="simpleMarkdown(commandMeta.description)"></p>
    <div v-if="commandMeta.examples">
      <p><b>Examples:</b></p>
      <ul>
        <li v-for="example in commandMeta.examples" v-html="simpleMarkdown(example).replace(/^\\/g, '')"></li>
      </ul>
      <p></p>
    </div>
  </div>
</template>
<script>
export default {
  props: ['prefix', 'color', 'commandName', 'commandMeta'],
  methods: {
    simpleMarkdown(input) {
      if (!input) return ''
      return input
      .replace(/\*\*(.+?)\*\*/g, '<b>$1</b>')
      .replace(/\*(.+?)\*/g, '<i>$1</i>')
      .replace(/`(.+?)`/g, '<code>$1</code>')
      .replace(/\[(.+?)]\((.+?)\)/g, '<a target="_blank" href="$2">$1</a>')
      .replace(/$/gm, '<br>')
      .replace(/{{prefix}}/g, this.prefix)
    }
  },
  computed: {
    icon() {
      switch(this.commandMeta.level) {
        case 1:
          return "perm_identity"
        case 2:
          return "lock_outline"
        case 3:
        case 4:
          return "lock"
        case 5:
          return "extension"
        default:
          return "public"
      }
    },
    iconTooltip() {
      switch(this.commandMeta.level) {
        case 1:
          return "DJs/Bot Commanders and Song Requesters"
        case 2:
          return "DJs/Bot Commanders only"
        case 3:
          return "Bot Commanders only"
        case 4:
          return "Server Owner only"
        case 5:
          return "Bot Owner only"
        default:
          return "Public Command"
      }
    },
    argSeparator() {
      return this.commandMeta.argSeparator || ' '
    },
    args() {
      if (!this.commandMeta.args) return []
      const args = []
      for (const arg of this.commandMeta.args) {
        const v = {
          display: '',
          tooltip: ''
        }
        try {
          v.display = arg.match(/^\W*([\w\d\s=]*)\W*$/)[1]
        } catch(e) {}
        if (!v.display) continue
        if (arg.match(/^\(.*\)$/)) {
          v.tooltip = 'Optional parameter'
          v.optional = true
          const defaultVal = v.display.split('=')
          if (defaultVal[1]) {
            v.display = defaultVal[0]
            v.tooltip += `, default "${defaultVal[1]}"`
          }
        } else {
          v.tooltip = 'Required parameter'
        }
        if (arg.match(/^\(?<@.*>\)?$/)) {
          v.display = `@${v.display}`
          v.tooltip += ', user mention'
        }
        if (arg.match(/\+\)$/)) v.ellipsis = true
        v.tooltip += '.'
        v.display = v.optional ? `[${v.display}?]` : `{${v.display}}`
        args.push(v)
      }
      return args
    }
  }
}
</script>
